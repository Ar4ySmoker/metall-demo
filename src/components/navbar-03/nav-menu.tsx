"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
// import { asortiment } from "./config";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AsortimentGrid } from "./AsortimentGrid";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="flex justify-around items-center gap-5 ">
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-[15px] font-normal bg-red-500 text-white">
          Каталог товаров
        </NavigationMenuTrigger>
       <NavigationMenuContent>
    <AsortimentGrid/>
  
</NavigationMenuContent>


      </NavigationMenuItem>

      <NavigationMenuItem>
        <div className="relative hidden md:block">
              <Search className="h-5 w-5 absolute inset-y-0 my-auto left-2.5" />
              <Input
                className="pl-10 flex-1 bg-white dark:bg-slate-800 border-none shadow-none w-[280px] rounded-full"
                placeholder="Поиск"
              />
            </div>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/"
            
          >
            <div className="flex items-center gap-2">

<ShoppingCart className="w-8! h-8! text-muted-foreground" />
<div className="flex flex-col items-center justify-center">
  <p className="text-md font-semibold">Корзина</p>
  <p className="text-sm text-muted-foreground">0 р.</p>
  </div>         
            </div>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

       <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            href="/"
            
          >
            <div className="flex items-center gap-2">

<Heart className="w-8! h-8! text-muted-foreground" />
<div className="flex flex-col items-center justify-center">
  <p className="text-md font-semibold">Избранное</p>
  <p className="text-sm text-muted-foreground">0 товаров</p>
  </div>         
            </div>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

       <NavigationMenuItem >
      <Button variant='destructive'>Расширить заказ</Button>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> 
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
