// 'use client';

// import { useState, useMemo } from 'react';

// const units = ['кг', 'шт', 'м'];

// // Тип арматуры
// export interface Rebar {
//   id: string;
//   name: string;
//   diameterMm: number;
//   lengthM: number;
//   price: number; // за 1 тонну
//   unit: string;
// }

// // Используем первую позицию как пример
// const rebar: Rebar = {
//   id: 'rebar-001',
//   name: 'Арматура А500С',
//   diameterMm: 12,
//   lengthM: 12,
//   price: 50000, // за 1 тонну
//   unit: 'тн',
// };

// export default function InputWithUnit() {
//   const [value, setValue] = useState('');
//   const [unit, setUnit] = useState(units[0]);

//   // Цена за 1 кг
//   const pricePerKg = rebar.price / 1000;

//   // Масса одного прутка в кг (для шт и м)
//   const weightPerRebar = getWeightPerMeter(rebar.diameterMm) * rebar.lengthM;

//   // Цена за 1 штуку
//   const pricePerUnit = useMemo(() => {
//     if (unit === 'кг') return pricePerKg;
//     if (unit === 'шт') return pricePerKg * weightPerRebar; // цена за штуку
//     if (unit === 'м') return pricePerKg * getWeightPerMeter(rebar.diameterMm); // цена за метр
//     return 0;
//   }, [unit, pricePerKg]);

//   // Итоговая стоимость
//   const result =
//     value && !isNaN(Number(value))
//       ? (Number(value) * pricePerUnit).toFixed(2)
//       : '0.00';
// const formatted = new Intl.NumberFormat("ru-RU", {
//       style: "currency",
//       currency: "RUB",
//     }).format(Number(result));
//   return (
    
//     <div className="flex items-center justify-between gap-2 border p-4 rounded max-w-2xl">
//       {/* Цена */}
//       {/* <div className="text-sm text-gray-700 w-24">
//         Цена: {pricePerUnit.toFixed(2)} ₽ / {unit}
//       </div> */}

//       {/* Ввод */}
//       <input
//         type="number"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Введите значение"
//         className="border p-2 rounded w-32"
//       />

//       {/* Селект */}
//       <select
//         value={unit}
//         onChange={(e) => setUnit(e.target.value)}
//         className="border p-2 rounded"
//       >
//         {units.map((u) => (
//           <option key={u} value={u}>
//             {u}
//           </option>
//         ))}
//       </select>



//       {/* Результат */}
//       <div className="text-sm text-gray-700 w-40 text-right">
//         Итого: {formatted}
//       </div>
//     </div>
//   );
// }

// // Вспомогательная функция: масса 1 метра арматуры по формуле
// function getWeightPerMeter(diameterMm: number): number {
//   // Формула: масса = (π * d²) / 4 * ρ, где ρ ≈ 7.85 г/см³
//   // Упрощённо: масса ≈ 0.00617 * d² (в кг/м)
//   return 0.00617 * diameterMm * diameterMm;
// }
import { useState, useEffect } from 'react';
import { useCartFavorites } from "@/context/CartFavoritesContext";

// Тип арматуры
export interface Rebar {
  id: string;
  name: string;
  diameterMm: number;
  lengthM: number;
  price: number; // за 1 тонну
  unit: string;
}

const rebar: Rebar = {
  id: 'rebar-001',
  name: 'Арматура А500С',
  diameterMm: 12,
  lengthM: 12,
  price: 50000, // за 1 тонну
  unit: 'тн',
};

const units = ['кг', 'шт', 'м'];
type Unit = 'кг' | 'шт' | 'м';

export default function InputWithUnit({ itemId }: { itemId: string }) {
  const { basket, updateCount, updateUnit, updateSum } = useCartFavorites();
  const item = basket.find((item) => item._id === itemId);  // Найти товар по ID

  const [value, setValue] = useState(item?.count || 0);
  const [unit, setUnit] = useState(item?.unit || units[0]);

  // Цена за 1 кг
  const pricePerKg = rebar.price / 1000;

  // Масса одного прутка в кг (для шт и м)
  const weightPerRebar = getWeightPerMeter(rebar.diameterMm) * rebar.lengthM;

  // Цена за 1 штуку
  const pricePerUnit = (unit: string) => {
    if (unit === 'кг') return pricePerKg;
    if (unit === 'шт') return pricePerKg * weightPerRebar;
    if (unit === 'м') return pricePerKg * getWeightPerMeter(rebar.diameterMm);
    return 0;
  };

  useEffect(() => {
    if (item) {
      setValue(item.count);
      setUnit(item.unit);
    }
  }, [item]); // Пересчитываем только когда изменяется item

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = Math.max(Number(e.target.value), 0);  // Преобразуем в число и избегаем отрицательных значений
    setValue(newCount);  // Обновляем локальное состояние
    updateCount(itemId, newCount);  // Обновляем состояние корзины
    updateSum(itemId, newCount * pricePerUnit(unit)); // Обновляем сумму товара
  };

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    updateCount(itemId, newValue);
    updateSum(itemId, newValue * pricePerUnit(unit)); // Обновляем сумму товара
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - 1, 0);
    setValue(newValue);
    updateCount(itemId, newValue);
    updateSum(itemId, newValue * pricePerUnit(unit)); // Обновляем сумму товара
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newUnit = e.target.value;
    setUnit(newUnit);
    updateUnit(itemId, newUnit as Unit);
    updateSum(itemId, value * pricePerUnit(newUnit)); // Обновляем сумму товара при изменении юнита
  };

  const result = (value * pricePerUnit(unit)).toFixed(2);
  const formatted = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(Number(result));

  return (
    <div className="flex items-center justify-between gap-2 border p-4 rounded max-w-2xl">
      <div className="flex items-center gap-2">
        <button onClick={handleDecrement} className="border p-2 rounded">-</button>
        <input
          type="number"
          value={value}
          onChange={handleCountChange}
          className="border p-2 rounded w-32 text-center"
        />
        <button onClick={handleIncrement} className="border p-2 rounded">+</button>
      </div>
      <select value={unit} onChange={handleUnitChange} className="border p-2 rounded">
        {units.map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
      <div className="text-sm text-gray-700 w-40 text-right">
        Итого: {formatted}
      </div>
    </div>
  );
}

function getWeightPerMeter(diameterMm: number): number {
  return 0.00617 * diameterMm * diameterMm;
}
