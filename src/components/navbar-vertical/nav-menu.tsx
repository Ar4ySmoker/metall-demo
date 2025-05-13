"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import React from "react";
import Link from "next/link";

// Пример структуры
const asortiment = [
  {
    title: "Инструменты",
    items: [
      { title: "Дрели", href: "/catalog/drills" },
      { title: "Перфораторы", href: "/catalog/perforators" },
    ],
  },
  {
    title: "Сантехника",
    items: [
      { title: "Краны", href: "/catalog/faucets" },
      { title: "Трубы", href: "/catalog/pipes" },
    ],
  },
];

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="flex justify-around items-center gap-5">
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-[15px] font-normal bg-accent text-white hover:bg-accent/80 hover:text-destructive!"> 
          Каталог товаров
        </NavigationMenuTrigger>
        <NavigationMenuContent className="flex px-4 py-2 bg-white shadow-lg">
          {/* Левая колонка — категории */}
          <div className="flex flex-col pr-6 border-r">
            {asortiment.map((category) => (
              <div
                key={category.title}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium"
              >
                {category.title}
              </div>
            ))}
          </div>

          {/* Правая колонка — итемы первой категории (пример) */}
          <div className="flex flex-col pl-6 min-w-[200px]">
            {asortiment[0].items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="px-4 py-1.5 hover:underline"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <div className="relative hidden md:block">
          <Search className="h-5 w-5 absolute inset-y-0 my-auto left-2.5" />
          <Input
            className="pl-10 w-[280px] rounded-full"
            placeholder="Поиск"
          />
        </div>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
