// 'use client'

// import { useCartFavorites } from "@/context/CartFavoritesContext"
// import { useEffect, useState, useMemo } from "react"
// import { Button } from "../ui/button"
// import { Input } from "../ui/input"
// import { Minus, Plus } from "lucide-react"

// // Тип арматуры (используется для расчетов)
// export interface Rebar {
//   id: string
//   name: string
//   diameterMm: number
//   lengthM: number
//   price: number // за 1 тонну
//   unit: string
// }

// // Пример арматуры
// const rebar: Rebar = {
//   id: 'rebar-001',
//   name: 'Арматура А500С',
//   diameterMm: 12,
//   lengthM: 12,
//   price: 50000, // за 1 тонну
//   unit: 'тн',
// }

// export const QuantityControls = ({ itemId }: { itemId: string }) => {
//   const { basket, updateCount, updateUnit } = useCartFavorites() 
//   const item = basket.find((i) => i._id === itemId)

//   const currentCount = item?.count ?? 0
//   const currentUnit = item?.unit ?? "шт" // дефолт

//   const [inputValue, setInputValue] = useState(currentCount.toString())
//   const [unit, setUnit] = useState(currentUnit)

//   useEffect(() => {
//     setInputValue(currentCount.toString())
//   }, [currentCount])

//   useEffect(() => {
//     setUnit(currentUnit)
//   }, [currentUnit])

//   // Цена за 1 кг
//   const pricePerKg = rebar.price / 1000

//   // Масса одного элемента (например, прутка)
//   const weightPerRebar = getWeightPerMeter(rebar.diameterMm) * rebar.lengthM

//   // Цена за единицу (шт, м, кг)
//   const pricePerUnit = useMemo(() => {
//     if (unit === "кг") return pricePerKg // Цена за килограмм
//     if (unit === "шт") return pricePerKg * weightPerRebar // Цена за штуку
//     if (unit === "м") return pricePerKg * getWeightPerMeter(rebar.diameterMm) // Цена за метр
//     return 0
//   }, [unit, pricePerKg, weightPerRebar])

//   // Итоговая стоимость
//   const result =
//     inputValue && !isNaN(Number(inputValue))
//       ? (Number(inputValue) * pricePerUnit).toFixed(2)
//       : "0.00"

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value
//     if (/^\d*$/.test(value)) {
//       setInputValue(value)
//     }
//   }

//   const handleBlur = () => {
//     const parsed = parseInt(inputValue, 10)
//     updateCount(itemId, isNaN(parsed) || parsed < 0 ? 0 : parsed)
//   }

//   const handleIncrement = () => {
//     updateCount(itemId, currentCount + 1)
//   }

//   const handleDecrement = () => {
//     updateCount(itemId, Math.max(currentCount - 1, 0))
//   }

//   const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedUnit = e.target.value as "шт" | "м" | "кг"
//     setUnit(selectedUnit)
//     updateUnit(itemId, selectedUnit) 
//   }

//   return (
//     <div className="p-2 text-center space-y-2">
//       <div className="flex items-center justify-center space-x-2">
//         <Button variant="outline" size="icon" className="h-6 w-6" onClick={handleDecrement}>
//           <Minus className="h-4 w-4" />
//           <span className="sr-only">Уменьшить</span>
//         </Button>

//         <Input
//           type="number"
//           inputMode="numeric"
//           className="w-16 text-center"
//           value={inputValue}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />

//         <Button variant="outline" size="icon" className="h-6 w-6" onClick={handleIncrement}>
//           <Plus className="h-4 w-4" />
//           <span className="sr-only">Увеличить</span>
//         </Button>
//       </div>

//       {/* Отображение цены за единицу */}
//       <div className="mt-2">
//         <span className="text-sm">Цена: {pricePerUnit.toFixed(2)} ₽ / {unit}</span>
//       </div>

//       {/* Выбор единицы измерения */}
//       <div className="mt-2">
//         <select
//           value={unit}
//           onChange={handleUnitChange}
//           className="border rounded px-2 py-1 text-sm"
//         >
//           <option value="шт">шт</option>
//           <option value="м">метры</option>
//           <option value="кг">килограммы</option>
//         </select>
//       </div>

//       {/* Итоговая стоимость */}
//       <div className="mt-2">
//         <span className="text-sm">Итого: {result} ₽</span>
//       </div>
//     </div>
//   )
// }

// // Вспомогательная функция для массы одного метра арматуры
// function getWeightPerMeter(diameterMm: number): number {
//   // Формула: масса = (π * d²) / 4 * ρ, где ρ ≈ 7.85 г/см³
//   // Упрощённо: масса ≈ 0.00617 * d² (в кг/м)
//   return 0.00617 * diameterMm * diameterMm
// }
// import { useCartFavorites } from "@/context/CartFavoritesContext"
// import { useEffect, useState, useMemo } from "react"
// import { Button } from "../ui/button"
// import { Input } from "../ui/input"
// import { Minus, Plus } from "lucide-react"

// // Тип арматуры (используется для расчетов)
// export interface Rebar {
//   id: string
//   name: string
//   diameterMm: number
//   lengthM: number
//   price: number // за 1 тонну
//   unit: string
//   type: string // Для различения типов, например, труба или арматура
//   size?: string // Для труб, если есть размер
// }

// // Пример арматуры
// const rebar: Rebar = {
//   id: 'rebar-001',
//   name: 'Арматура А500С',
//   diameterMm: 12,
//   lengthM: 12,
//   price: 50000, // за 1 тонну
//   unit: 'тн',
//   type: 'armatura', // тип арматуры
// }

// export const QuantityControls = ({ itemId }: { itemId: string }) => {
//   const { basket, updateCount, updateUnit } = useCartFavorites() 
//   const item = basket.find((i) => i._id === itemId)

//   const currentCount = item?.count ?? 0
//   const currentUnit = item?.unit ?? "шт" // дефолт

//   const [inputValue, setInputValue] = useState(currentCount.toString())
//   const [unit, setUnit] = useState(currentUnit)

//   useEffect(() => {
//     setInputValue(currentCount.toString())
//   }, [currentCount])

//   useEffect(() => {
//     setUnit(currentUnit)
//   }, [currentUnit])

//   // Цена за 1 кг
//   const pricePerKg = rebar.price / 1000

//   // Масса одного элемента (например, прутка)
//   const weightPerRebar = rebar.type === "armatura" ? getWeightPerMeter(rebar.diameterMm) * rebar.lengthM : 0

//   // Для трубы (если type === "truba")
//   const weightPerPipe = rebar.type === "truba" && rebar.size ? getWeightPerSquarePipe(rebar.size) * rebar.lengthM : 0

//   // Цена за единицу (шт, м, кг)
//   const pricePerUnit = useMemo(() => {
//     if (rebar.type === "armatura") {
//       if (unit === "кг") return pricePerKg // Цена за килограмм
//       if (unit === "шт") return pricePerKg * weightPerRebar // Цена за штуку
//       if (unit === "м") return pricePerKg * getWeightPerMeter(rebar.diameterMm) // Цена за метр
//     }

//     if (rebar.type === "truba") {
//       if (unit === "кг") return pricePerKg // Цена за килограмм для трубы
//       if (unit === "шт") return pricePerKg * weightPerPipe // Цена за штуку трубы
//       if (unit === "м") return pricePerKg * getWeightPerSquarePipe(rebar.size!) // Цена за метр трубы
//     }

//     return 0
//   }, [unit, pricePerKg, weightPerRebar, weightPerPipe, rebar.type, rebar.size])

//   // Итоговая стоимость
//   const result =
//     inputValue && !isNaN(Number(inputValue))
//       ? (Number(inputValue) * pricePerUnit).toFixed(2)
//       : "0.00"

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value
//     if (/^\d*$/.test(value)) {
//       setInputValue(value)
//     }
//   }

//   const handleBlur = () => {
//     const parsed = parseInt(inputValue, 10)
//     updateCount(itemId, isNaN(parsed) || parsed < 0 ? 0 : parsed)
//   }

//   const handleIncrement = () => {
//     updateCount(itemId, currentCount + 1)
//   }

//   const handleDecrement = () => {
//     updateCount(itemId, Math.max(currentCount - 1, 0))
//   }

//   const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedUnit = e.target.value as "шт" | "м" | "кг"
//     setUnit(selectedUnit)
//     updateUnit(itemId, selectedUnit) 
//   }

//   return (
//     <div className="p-2 text-center space-y-2">
//       <div className="flex items-center justify-center space-x-2">
//         <Button variant="outline" size="icon" className="h-6 w-6" onClick={handleDecrement}>
//           <Minus className="h-4 w-4" />
//           <span className="sr-only">Уменьшить</span>
//         </Button>

//         <Input
//           type="number"
//           inputMode="numeric"
//           className="w-16 text-center"
//           value={inputValue}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />

//         <Button variant="outline" size="icon" className="h-6 w-6" onClick={handleIncrement}>
//           <Plus className="h-4 w-4" />
//           <span className="sr-only">Увеличить</span>
//         </Button>
//       </div>

//       {/* Отображение цены за единицу */}
//       <div className="mt-2">
//         <span className="text-sm">Цена: {pricePerUnit.toFixed(2)} ₽ / {unit}</span>
//       </div>

//       {/* Выбор единицы измерения */}
//       <div className="mt-2">
//         <select
//           value={unit}
//           onChange={handleUnitChange}
//           className="border rounded px-2 py-1 text-sm"
//         >
//           <option value="шт">шт</option>
//           <option value="м">метры</option>
//           <option value="кг">килограммы</option>
//         </select>
//       </div>

//       {/* Итоговая стоимость */}
//       <div className="mt-2">
//         <span className="text-sm">Итого: {result} ₽</span>
//       </div>
//     </div>
//   )
// }

// // Вспомогательная функция для массы одного метра арматуры
// function getWeightPerMeter(diameterMm: number): number {
//   // Формула: масса = (π * d²) / 4 * ρ, где ρ ≈ 7.85 г/см³
//   // Упрощённо: масса ≈ 0.00617 * d² (в кг/м)
//   return 0.00617 * diameterMm * diameterMm
// }

// // Вспомогательная функция для массы квадратной трубы
// function getWeightPerSquarePipe(size: string): number {
//   // Размер квадратной трубы (например, "20x20x2")
//   const [side, thickness] = size.split("x").map(Number)

//   // Площадь сечения квадратной трубы (S = a²) + внутреннее отверстие
//   const outerArea = side * side
//   const innerSide = side - 2 * thickness
//   const innerArea = innerSide * innerSide

//   // Площадь сечения материала трубы
//   const materialArea = outerArea - innerArea

//   // Плотность стали ≈ 7.85 г/см³ = 7850 кг/м³
//   const density = 7850

//   // Масса квадратной трубы (в кг/м)
//   return materialArea * density / 1000000 // переводим в кг/м
// }
