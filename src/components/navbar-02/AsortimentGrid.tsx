import React from "react";
import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { asortiment } from "./config";

const getVerticalColumns = (arr: typeof asortiment, cols: number) => {
  const perCol = Math.ceil(arr.length / cols);
  return Array.from({ length: cols }, (_, colIndex) =>
    arr.slice(colIndex * perCol, (colIndex + 1) * perCol)
  );
};

export const AsortimentGrid = () => {
  const columnCount = 4;
  const columns = getVerticalColumns(asortiment, columnCount);

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4 w-full md:w-[80vw]  mx-auto ">
      {columns.map((col, colIdx) => (
        <ul key={colIdx} className="flex-1 space-y-2">
          {col.map((item, itemIdx) => (
            <li key={itemIdx}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={`block text-sm transition-colors ${
                    item.type === "group"
                      ? "font-bold text-black dark:text-white hover:text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
