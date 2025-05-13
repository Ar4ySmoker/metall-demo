import React from "react";
import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { asortiment } from "./config";



const chunkArrayVertical = (arr: typeof asortiment, columns: number) => {
  const perColumn = Math.ceil(arr.length / columns);
  const result: typeof asortiment[] = [];

  for (let i = 0; i < columns; i++) {
    result.push(arr.slice(i * perColumn, (i + 1) * perColumn));
  }

  return result;
};

export const AsortimentGrid = () => {
  const columns = chunkArrayVertical(asortiment, 4);

  return (
    <div className="grid grid-cols-4 gap-6 w-[1000px] p-4">
      {columns.map((col, idx) => (
        <ul key={idx} className="space-y-1">
          {col.map((item, i) =>
            item.type === "group" ? (
              <li key={i} className="font-bold text-sm text-black dark:text-white mt-2">
                {item.title}
              </li>
            ) : (
              <li key={i}>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </li>
            )
          )}
        </ul>
      ))}
    </div>
  );
};
