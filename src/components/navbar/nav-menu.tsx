import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const navItems = [
  { name: "О компании", href: "/o-kompanii" },
  { name: "Доставка", href: "/blog" },
  { name: "Оплата", href: "/about" },
  { name: "Прайс", href: "/contact" },
  { name: "Статьи", href: "/contact" },
  { name: "Акции %", href: "/contact" },
  { name: "Калькулятор", href: "/contact" },
  { name: "Вопрос-ответ", href: "/contact" },
  { name: "Отзывы", href: "/contact" },
  { name: "Контакты", href: "/contact" },
    { name: "Предпологался вход", href: "/contact" },

  
];

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
     {navItems.map((item) => (
        <NavigationMenuItem key={item.name}>
          <NavigationMenuLink asChild>
            <Link href={item.href}>
              {item.name}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    
    </NavigationMenuList>
  </NavigationMenu>
);
