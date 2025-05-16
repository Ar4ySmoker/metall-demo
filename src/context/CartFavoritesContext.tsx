// import { CartItem } from "@/app/types/CartItem"
// import React, { createContext, useContext, useEffect, useState } from "react"

// interface CartFavoritesContextType {
//   basket: CartItem[]
//   favorites: string[]
//   totalPrice: number
//   addToBasket: (item: CartItem) => void
//   removeFromBasket: (id: string) => void
//   updateCount: (id: string, count: number) => void
//   updateUnit: (id: string, unit: "шт" | "м" | "кг") => void
//   addToFavorites: (id: string) => void
//   removeFromFavorites: (id: string) => void
//   getItemCount: (id: string) => number
//   getItemTotal: (id: string) => number
//   updateTotalPrice: (price: number) => void
// }

// const CartFavoritesContext = createContext<CartFavoritesContextType | undefined>(undefined)

// export const CartFavoritesProvider = ({ children }: { children: React.ReactNode }) => {
//   const [basket, setBasket] = useState<CartItem[]>([])
//   const [favorites, setFavorites] = useState<string[]>([])
//   const [totalPrice, setTotalPrice] = useState<number>(0)

//   // Чтение из localStorage
//   useEffect(() => {
//     const savedBasket = localStorage.getItem("basket")
//     const savedFavorites = localStorage.getItem("favorites")

//     if (savedBasket) setBasket(JSON.parse(savedBasket))
//     if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
//   }, [])

//   // Сохранение в localStorage
//   useEffect(() => {
//     localStorage.setItem("basket", JSON.stringify(basket))
//     localStorage.setItem("favorites", JSON.stringify(favorites))
//   }, [basket, favorites])

//   // Функция для расчета общей стоимости
//   const calculateTotalPrice = () => {
//     return basket.reduce((total, item) => total + getItemTotal(item._id), 0)
//   }

//   // Функция для обновления общей стоимости
//   const updateTotalPrice = (price: number) => {
//     setTotalPrice(price)
//   }

//   const getItemCount = (id: string): number => {
//     const item = basket.find((i) => i._id === id)
//     return item?.count ?? 0
//   }

//   const getItemTotal = (id: string): number => {
//     const item = basket.find((i) => i._id === id)
//     if (!item || typeof item.count !== "number" || typeof item.price !== "number") return 0

//     // Расчёт стоимости в зависимости от единицы измерения
//     if (item.unit === "м") {
//       return item.count * (item.price / 1000) // Для метров считаем цену за 1000 кг
//     } else if (item.unit === "кг") {
//       return item.count * item.price // Для килограммов просто умножаем на цену
//     } else {
//       return item.count * item.price // Для штук также умножаем на цену
//     }
//   }

//   const addToBasket = (item: CartItem) => {
//     setBasket((prev) => {
//       const existing = prev.find((i) => i._id === item._id)
//       if (existing) {
//         // Если товар уже есть в корзине, обновляем его количество
//         return prev.map((i) =>
//           i._id === item._id ? { ...i, count: i.count + item.count, unit: item.unit } : i
//         )
//       }
//       return [...prev, item] // Иначе добавляем новый товар
//     })
//   }

//   const updateCount = (id: string, count: number) => {
//     setBasket((prev) =>
//       prev.map((item) =>
//         item._id === id ? { ...item, count: Math.max(count, 0) } : item
//       )
//     )
//   }

//   const updateUnit = (id: string, unit: "шт" | "м" | "кг") => {
//     setBasket((prev) =>
//       prev.map((item) =>
//         item._id === id ? { ...item, unit } : item
//       )
//     )
//   }

//   const removeFromBasket = (id: string) => {
//     setBasket((prev) => prev.filter((item) => item._id !== id))
//   }

//   const addToFavorites = (id: string) => {
//     setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]))
//   }

//   const removeFromFavorites = (id: string) => {
//     setFavorites((prev) => prev.filter((item) => item !== id))
//   }

//   useEffect(() => {
//     const newTotalPrice = calculateTotalPrice()
//     updateTotalPrice(newTotalPrice)
//   }, [basket, calculateTotalPrice])

//   return (
//     <CartFavoritesContext.Provider
//       value={{
//         basket,
//         favorites,
//         totalPrice,
//         addToBasket,
//         removeFromBasket,
//         updateCount,
//         updateUnit,
//         addToFavorites,
//         removeFromFavorites,
//         getItemCount,
//         getItemTotal,
//         updateTotalPrice,
//       }}
//     >
//       {children}
//     </CartFavoritesContext.Provider>
//   )
// }

// export const useCartFavorites = () => {
//   const context = useContext(CartFavoritesContext)
//   if (!context) {
//     throw new Error("useCartFavorites must be used within a CartFavoritesProvider")
//   }
//   return context
// }
import { CartItem } from "@/types/CartItem";
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

interface CartFavoritesContextType {
  basket: CartItem[];
  favorites: string[];
  totalPrice: number;
  addToBasket: (item: CartItem) => void;
  removeFromBasket: (id: string) => void;
  updateCount: (id: string, count: number) => void;
  updateUnit: (id: string, unit: "шт" | "м" | "кг") => void;
  updateSum: (id: string, sum: number) => void;  // Добавление этой функции
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  getItemCount: (id: string) => number;
  getItemTotal: (id: string) => number;
  updateTotalPrice: (price: number) => void;
}


const CartFavoritesContext = createContext<CartFavoritesContextType | undefined>(undefined);

export const CartFavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [basket, setBasket] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Чтение из localStorage
  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    const savedFavorites = localStorage.getItem("favorites");

    if (savedBasket) setBasket(JSON.parse(savedBasket));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [basket, favorites]);

  // Функция для расчета общей стоимости с использованием useCallback
  const calculateTotalPrice = useCallback(() => {
    return basket.reduce((total, item) => total + (item.total ?? 0), 0);
  }, [basket]);

  // Функция для обновления общей стоимости
  const updateTotalPrice = (price: number) => {
    setTotalPrice(price);
  };

  const getItemCount = (id: string): number => {
    const item = basket.find((i) => i._id === id);
    return item?.count ?? 0;
  };

  const getItemTotal = (id: string): number => {
    const item = basket.find((i) => i._id === id);
    if (!item) return 0;
    return item.total ?? 0;
  };

  const addToBasket = (item: CartItem) => {
    setBasket((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        // Если товар уже есть в корзине, обновляем его количество
        return prev.map((i) =>
          i._id === item._id ? { ...i, count: i.count + item.count, unit: item.unit, total: item.total } : i
        );
      }
      return [...prev, item]; // Иначе добавляем новый товар
    });
  };

  // Обновление количества товара
  const updateCount = (id: string, count: number) => {
    setBasket((prev) => {
      return prev.map((item) =>
        item._id === id
          ? { ...item, count: Math.max(count, 0), total: count * item.price }
          : item
      );
    });
  };

  // Обновление единицы измерения
  const updateUnit = (id: string, unit: "шт" | "м" | "кг") => {
    setBasket((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, unit, total: item.count * item.price } : item
      )
    );
  };

  const updateSum = (id: string, sum: number) => {
  setBasket((prev) =>
    prev.map((item) =>
      item._id === id ? { ...item, total: sum } : item
    )
  );
};
  const removeFromBasket = (id: string) => {
    setBasket((prev) => prev.filter((item) => item._id !== id));
  };

  const addToFavorites = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item !== id));
  };

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice(); // Теперь использовать мемоизированную функцию
    updateTotalPrice(newTotalPrice);
  }, [basket, calculateTotalPrice]);

  return (
    <CartFavoritesContext.Provider
      value={{
        basket,
        favorites,
        totalPrice,
        addToBasket,
        removeFromBasket,
        updateCount,
        updateUnit,
        updateSum,
        addToFavorites,
        removeFromFavorites,
        getItemCount,
        getItemTotal,
        updateTotalPrice,
      }}
    >
      {children}
    </CartFavoritesContext.Provider>
  );
};

export const useCartFavorites = () => {
  const context = useContext(CartFavoritesContext);
  if (!context) {
    throw new Error("useCartFavorites must be used within a CartFavoritesProvider");
  }
  return context;
};
