"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger, // Импортируем Trigger для использования в обоих случаях
} from "@/components/ui/dropdown-menu"
import { Heart, Search, ShoppingCart } from "lucide-react"
import { Input } from "../ui/input"
import { AsortimentGrid } from "./AsortimentGrid"
import { ShimmerButton } from "../magicui/shimmer-button"
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { Textarea } from "../ui/textarea"
import { useCartFavorites } from "@/context/CartFavoritesContext"
import { Cart } from "../cart/cart"

export const NavMenu = (props: any) => {
const { basket } = useCartFavorites()
console.log("basket из контекста в NavMenu", basket)
  const [openBasket, setOpenBasket] = React.useState(false) // Состояние для корзины
  const [openFavorites, setOpenFavorites] = React.useState(false) // Состояние для избранного

  return (
    <>
      <NavigationMenu {...props}>
        <NavigationMenuList className="h-full grid grid-cols-8 gap-5 data-[orientation=horizontal]">
          {/* Каталог */}
          <NavigationMenuItem className="col-span-2">
            <NavigationMenuTrigger className="w-max m-1 font-normal bg-accent text-white">
              Каталог товаров
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="h-[400px] sm:h-max overflow-y-auto">
                <AsortimentGrid />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Поиск */}
          <NavigationMenuItem className="col-span-2">
            <div className="relative hidden md:block">
              <Search className="h-5 w-5 absolute inset-y-0 my-auto left-2.5" />
              <Input
                className="pl-10 flex-1 bg-white dark:bg-slate-800 border-none shadow-none rounded-md"
                placeholder="Поиск"
              />
            </div>
          </NavigationMenuItem>

          {/* Корзина */}
          <NavigationMenuItem className="hidden md:block">
            <DropdownMenu open={openBasket} onOpenChange={setOpenBasket}>
              <DropdownMenuTrigger asChild>
                <div
                  onClick={() => setOpenBasket(!openBasket)}
                  className="flex items-center gap-2 p-2 rounded transition-colors hover:bg-accent/80 hover:text-white cursor-pointer"
                >
                  <ShoppingCart className="w-8 h-8 text-muted-foreground transition-colors" />
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-md font-semibold">Корзина</p>
                    <p className="text-sm text-muted-foreground">{basket.length}</p>
                  </div>
                </div>
              </DropdownMenuTrigger>
             <DropdownMenuContent align="end" className=" overflow-y-auto">
  <Cart/>
</DropdownMenuContent>

            </DropdownMenu>
          </NavigationMenuItem>

          {/* Избранное */}
          <NavigationMenuItem className="hidden md:block">
            <DropdownMenu open={openFavorites} onOpenChange={setOpenFavorites}>
              <DropdownMenuTrigger asChild>
                <div
                  onClick={() => setOpenFavorites(!openFavorites)}
                  className="flex items-center gap-2 p-2 rounded transition-colors hover:bg-accent/80 hover:text-white cursor-pointer"
                >
                  <Heart className="w-8 h-8 text-muted-foreground transition-colors" />
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-md font-semibold">Избранное</p>
                    <p className="text-sm text-muted-foreground">0 товаров</p>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <p className="p-4">Содержимое избранного</p>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

          {/* Рассчитать заказ */}
          <NavigationMenuItem className="col-start-8 justify-self-end">
            <AlertDialogTrigger asChild>
              <ShimmerButton
                background="#8C2641"
                shimmerSize="0.5em"
                borderRadius="10px"
                className="text-sm w-35 h-9 m-1"
              >
                Рассчитать заказ
              </ShimmerButton>
            </AlertDialogTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Хотите расчитать заказ?</AlertDialogTitle>
          <AlertDialogDescription>
            Оставьте свои данные и мы с вами свяжемся для расчета заказа.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form>
          <Input
            type="text"
            placeholder="Ваше имя"
            className="mb-4 w-full bg-white dark:bg-slate-800 border-none shadow-none rounded-md"
          />
          <Input
            type="text"
            placeholder="Ваш телефон"
            className="mb-4 w-full bg-white dark:bg-slate-800 border-none shadow-none rounded-md"
          />
          <Textarea
            placeholder="Ваш комментарий"
            className="mb-4 w-full bg-white dark:bg-slate-800 border-none shadow-none rounded-md"
          />
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel className="ring-1 ring-accent/20 hover:ring-accent/40">
            Отмена
          </AlertDialogCancel>
          <AlertDialogAction className="bg-accent text-white hover:bg-accent/80">
            Отправить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  )
}
