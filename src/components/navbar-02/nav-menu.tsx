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
import { AsortimentGrid } from "./AsortimentGrid";
import { ShimmerButton } from "../magicui/shimmer-button";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Textarea } from "../ui/textarea";

export const NavMenu = (props: NavigationMenuProps) => (
  <><NavigationMenu {...props}>
    <NavigationMenuList className="h-full grid grid-cols-8 gap-5 data-[orientation=horizontal]">
      <NavigationMenuItem className="col-span-2">
        <NavigationMenuTrigger className=" w-max m-1 font-normal bg-accent text-white">
          {/* <ShinyButton className="text-[15px] w-full font-normal bg-accent text-white"> */}
            Каталог товаров
          {/* </ShinyButton> */}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="h-[400px] sm:h-max overflow-y-auto">
  <AsortimentGrid />
</div>

        </NavigationMenuContent>


      </NavigationMenuItem>

      <NavigationMenuItem className="col-span-2">
        <div className=" relative hidden md:block">
          <Search className="h-5 w-5 absolute inset-y-0 my-auto left-2.5" />
          <Input
            className="pl-10 flex-1 bg-white dark:bg-slate-800 border-none shadow-none  rounded-full"
            placeholder="Поиск" />
        </div>
      </NavigationMenuItem>

      <NavigationMenuItem className="hidden md:block">
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
      </NavigationMenuItem >

      <NavigationMenuItem className="hidden md:block">
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


      <AlertDialogTrigger className="col-start-8 justify-self-end" asChild>
        <ShimmerButton background='#8C2641' shimmerSize='0.5em' borderRadius='10px' className=" text-sm w-35 h-9 m-1" >
        Рассчитать заказ
        </ShimmerButton>
      </AlertDialogTrigger>
    </NavigationMenuList>
  </NavigationMenu><AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Хотите расчитать заказ?</AlertDialogTitle>
        <AlertDialogDescription>
          Оставьте свои данные и мы с вами свяжемся для расчета заказа.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <form action="">
        <Input
          type="text"
          placeholder="Ваше имя"
          className="mb-4 w-full bg-white dark:bg-slate-800 border-none shadow-none  rounded-md"
        />
        <Input
          type="text"
          placeholder="Ваш телефон"
          className="mb-4 w-full bg-white dark:bg-slate-800 border-none shadow-none  rounded-md"
        />
        <Textarea
          placeholder="Ваш комментарий"
          className="mb-4 w-full bg-white dark:bg-slate-800 border-none shadow-none  rounded-md"
        />
      </form>
      <AlertDialogFooter>
        <AlertDialogCancel className="ring-1 ring-accent/20 hover:ring-accent/40">Отмена</AlertDialogCancel>
        <AlertDialogAction className="bg-accent text-white hover:bg-accent/80 ">Отправить</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent></>
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
