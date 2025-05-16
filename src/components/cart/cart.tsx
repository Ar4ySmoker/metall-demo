import React from "react";
import { useCartFavorites } from "@/context/CartFavoritesContext";
import InputWithUnit from "../quantityControls/text"; // Для изменения количества и единицы измерения
import { CartItem } from "@/types/CartItem";

// Форматирование валюты
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(amount);
};

export const Cart = () => {
  const { basket, removeFromBasket, } = useCartFavorites(); // Получаем доступ к basket, removeFromBasket и updateSum
  
  
  // Функция вычисления цены за единицу
  const getPricePerUnit = (item: CartItem): number => {
    if (item.unit === "м") {
      return item.price ; // Цена за метр
    } else if (item.unit === "кг") {
      return item.price; // Цена за килограмм
    } else {
      return item.price; // Для штук (шт), просто цена
    }
  };


  // Условие для отображения информации о трубе или арматуре
  const getDisplayInfo = (item: CartItem) => {
    if (item.fluidity) {
      // Для арматуры
      return (
        <>
          {item.title} {item.fluidity ? ` ${item.type}` : ""}{" "}
          {item.welded ? ` ${item.welded}` : ""}{" "}
          {item.diameterMm ? ` Ø${item.diameterMm}` : ""}
        </>
      );
    } else if (item.type) {
      // Для трубы
      return (
        <>
          Труба {item.type} {item.diameterMm ? ` Ø${item.diameterMm}` : ""}
        </>
      );
    } else {
      return "Неизвестный тип";
    }
  };

  return (
    <div className="p-4 space-y-6">
      {basket.length === 0 ? (
        <div className="text-center text-muted-foreground">Корзина пуста</div>
      ) : (
        basket.map((item) => (
          <div key={item._id} className="flex justify-between items-start border-b pb-4">
            <div className="flex flex-col space-y-1">
              <span className="font-medium text-md">{item.title}</span>
              <span className="text-sm text-muted-foreground">
                {item.count} {item.unit} ×{item.type} {item.diameterMm ? `Ø${item.diameterMm}` : ""}
                {getDisplayInfo(item)} {/* Отображаем информацию о типе, жидкостности или размере */}
                {" × "}
                {formatCurrency(getPricePerUnit(item))} {/* Форматируем цену за единицу */}
              </span>

            
            </div>

            <div className="flex items-center space-x-4">
              <InputWithUnit itemId={item._id} />
              <button
                onClick={() => removeFromBasket(item._id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Удалить
              </button>
            </div>
          </div>
        ))
      )}

      {/* {basket.length > 0 && (
        <div className="pt-4 border-t font-semibold flex justify-between text-lg">
          <span>Итого:</span>
          <span className="text-right text-accent-foreground">
            {formatCurrency(total)} 
          </span>
        </div>
      )} */}
    </div>
  );
};
