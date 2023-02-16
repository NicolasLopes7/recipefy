"use client";

import { openAI } from "@/lib/openAI";
import { useMemo, useState } from "react";

type RecipeButton = { ingredients: string[] };
export const RecipeButton = ({ ingredients }: RecipeButton) => {
  const [rawRecipes, setRecipes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    setIsLoading(true);
    const {
      data: {
        choices: [{ text: response }],
      },
    } = await openAI.createCompletion({
      model: "text-davinci-003",
      temperature: 0.5,
      max_tokens: 2048,
      prompt: `Give me recipes that use ONLY the following ingredients: ${ingredients.join(
        ", "
      )} generate then splited in bullet points`,
    });

    setRecipes(response ?? "");
    setIsLoading(false);
  };

  const recipes = useMemo(
    () =>
      rawRecipes
        .split("\n\n-")
        .map((recipe) => {
          const [title, body] = recipe.split(":\n");
          if (!body) return null;
          return { title, body };
        })
        .filter(Boolean),
    [rawRecipes]
  );

  return (
    <div className="flex flex-col gap-4">
      <div
        role="button"
        className="p-4 bg-[#aa6e00] hover:bg-[#ca8400] hover:text-red-800 text-red-900 font-bold flex items-center justify-center text-center text-xl"
        onClick={handleClick}
        aria-disabled={isLoading}
      >
        {isLoading ? "🔎 Searching recipes on my 👵 book..." : "get recipe 🪄"}
      </div>

      <ul className="flex flex-wrap text-left gap-2">
        {recipes.map((recipe, index) => (
          <li key={index} className="text-slate-100">
            <a
              className="font-bold hover:underline cursor-pointer"
              href={`https://www.google.com/search?q=${recipe?.title}`}
              target="_blank"
              rel="noreferrer"
            >
              {recipe?.title}
            </a>
            :{recipe?.body}
          </li>
        ))}
      </ul>
    </div>
  );
};
