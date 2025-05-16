import { weightPerMeter } from "./weightPerMeter";

export const calculateWeight = (
  title: string,                    // Название товара
  unit: "шт" | "м" | "кг",          // Единица измерения
  count: number,                    // Количество
  productLength: number,            // Длина товара (если измеряется в штуках)
  pricePer1000Kg: number            // Цена за 1000 кг
): { weight: number, totalPrice: number } => {
  
  const wpMeter = weightPerMeter[title]; // Вес за 1 метр (получаем из базы данных)
  
  // Если вес за метр не найден, возвращаем 0
  if (!wpMeter) return { weight: 0, totalPrice: 0 };

  // Цена за 1 кг
  const pricePerKg = pricePer1000Kg / 1000;

  let weight = 0;
  let totalPrice = 0;

  switch (unit) {
    case "кг":
      // Если выбраны килограммы, просто считаем цену за килограмм
      weight = count;
      totalPrice = count * pricePerKg;
      break;

    case "м":
      // Если выбраны метры, рассчитываем, сколько метров можно купить на цену 1 кг
      weight = wpMeter * count;
      totalPrice = (pricePerKg / wpMeter) * count;
      break;

    case "шт":
      // Если выбраны штуки, считаем по формуле: количество штук * длина * вес за 1 метр
      weight = wpMeter * productLength * count;
      totalPrice = (weight / 1000) * pricePer1000Kg; // находим цену за штуки через вес
      break;

    default:
      return { weight: 0, totalPrice: 0 };
  }

  return { weight, totalPrice };
};
