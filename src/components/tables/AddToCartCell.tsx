// components/table/AddToCartCell.tsx
"use client";
import { ShoppingBasket } from "lucide-react";
import { useCartFavorites } from "@/context/CartFavoritesContext";
import { CartItem } from "@/types/CartItem";

export function AddToCartCell({ item }: { item: CartItem }) {
  const { addToBasket } = useCartFavorites();

  const handleAdd = () => {
    addToBasket(item);
  };

  return (
    <div
      onClick={handleAdd}
      className="flex justify-end mr-5 cursor-pointer hover:text-accent transition-all duration-300"
    >
      <ShoppingBasket />
    </div>
  );
}
