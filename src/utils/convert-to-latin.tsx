
import { FilterFn } from "@tanstack/react-table";

const convertToLatinLayout = (text: string): string => {
 const layoutMap: Record<string, string> = {
   "а": "f", "б": ",", "в": "d", "г": "u", "д": "l", "е": "t", "ё": "`", "ж": ";", "з": "p",
   "и": "b", "й": "q", "к": "r", "л": "k", "м": "v", "н": "y", "о": "j", "п": "g", "р": "h",
   "с": "c", "т": "n", "у": "e", "ф": "a", "х": "[", "ц": "w", "ч": "x", "ш": "i", "щ": "o",
   "ъ": "]", "ы": "s", "ь": "m", "э": "'", "ю": ".", "я": "z",
 };

 return text
   .toLowerCase()
   .normalize("NFD") // Нормализация строки
   .replace(/[\u0300-\u036f]/g, "") // Удаление диакритических знаков
   .split("")
   .map((char) => layoutMap[char] || char)
   .join("");
};
export const fuzzyFilter: FilterFn<any> = (row, columnId, filterValue) => {
  const value = row.getValue(columnId);
  if (typeof value !== "string") return false;

  const normalizedValue = convertToLatinLayout(value.toLowerCase());
  const normalizedFilter = convertToLatinLayout(filterValue.toLowerCase());

  return normalizedValue.includes(normalizedFilter);
};

fuzzyFilter.autoRemove = (val) => !val; // Удаление фильтра, если значение пустое
fuzzyFilter.resolveFilterValue = (val) => val.toLowerCase();