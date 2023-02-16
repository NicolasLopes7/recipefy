import { create } from "zustand";

type UseIngredients = {
  ingredients: string[];
  add: (ingredient: string) => void;
  update: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  remove: (index: number) => void;
};

export const useIngredients = create<UseIngredients>((set) => ({
  ingredients: [""],
  add: (ingredient: string) =>
    set((state) => ({ ingredients: [...state.ingredients, ingredient] })),
  remove: (index: number) =>
    set((state) => ({ ingredients: state.ingredients.filter((_, idx) => idx !== index) })),
  update: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) =>
    set((state) => ({
      ingredients: state.ingredients.map((ingredient, idx) =>
        idx === index ? e.target.value : ingredient
      ),
    })),
}));
