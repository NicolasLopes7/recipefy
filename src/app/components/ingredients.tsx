"use client";
import { useIngredients } from "@/lib/ingredients";

type IngredientActionsProps = {
  isLast: boolean;
  onAddNewIngredient: () => void;
  onRemoveIngredient: () => void;
};
const IngredientActions = ({
  isLast,
  onAddNewIngredient,
  onRemoveIngredient,
}: IngredientActionsProps) => {
  return (
    <div
      role="button"
      className="text-slate-200 hover:text-slate-300 p-3 hover:bg-orange-800 rounded-full"
      onClick={() => (isLast ? onAddNewIngredient() : onRemoveIngredient())}
    >
      {isLast ? "+" : "-"}
    </div>
  );
};

type IngredientProps = {
  isLast: boolean;
  onAddNewIngredient: () => void;
  onRemoveIngredient: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Ingredient = ({
  isLast = false,
  onAddNewIngredient,
  onRemoveIngredient,
  onChange,
  value,
}: IngredientProps) => {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        placeholder="Add new ingredient"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        value={value}
        onChange={onChange}
      />
      <IngredientActions
        isLast={isLast}
        onAddNewIngredient={onAddNewIngredient}
        onRemoveIngredient={onRemoveIngredient}
      />
    </div>
  );
};

export const Ingredients = () => {
  const { ingredients, add, remove, update } = useIngredients();

  return (
    <div className="gap-3">
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          value={ingredient}
          isLast={index === ingredients.length - 1}
          onAddNewIngredient={() => add("")}
          onRemoveIngredient={() => remove(index)}
          onChange={update(index)}
        />
      ))}
    </div>
  );
};
