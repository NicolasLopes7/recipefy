"use client";
import { Ingredients } from "./components/ingredients";
import { RecipeButton } from "./components/recipe";
import { useIngredients } from "../lib/ingredients";

export default function Home() {
  const ingredients = useIngredients((state) => state.ingredients);
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl text-slate-100 font-bold">🍝 recipefy</h1>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl text-slate-100 font-semibold">Ingredients:</h3>
        <Ingredients />
        <RecipeButton ingredients={ingredients} />
      </div>
    </main>
  );
}
