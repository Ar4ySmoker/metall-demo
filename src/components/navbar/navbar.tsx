'use client'

import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { MapPinIcon } from "lucide-react";
import { FaTelegram, FaWhatsapp, FaViber } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <div className="relative w-full bg-secondary">
      <button
        onClick={() => setIsNavVisible(!isNavVisible)}
        className="hidden md:block fixed top-0 right-4 z-50 p-2 bg-secondary text-white rounded-full shadow-md"
      >
        {isNavVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

    <nav
  className={`hidden md:flex flex-col transition-all duration-500 overflow-hidden bg-secondary text-white border-b ${
    isNavVisible ? 'h-16 opacity-100' : 'h-0 opacity-0'
  }`}
>
  <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 lg:px-8">
    <NavMenu className="hidden md:block" />
  </div>
</nav>


      <div className="h-20 bg-primary border-b flex items-center md:px-35">
<div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 my-2 w-full">
          <Image src="/logo.svg" alt="logo" width={124} height={32} className="rounded" />
          
          <div className="hidden md:flex flex-col items-center justify-center text-md font-bold">
            <div className="flex gap-2">
              <MapPinIcon />
              <p className="text-center text-sm">Москва и Московская область</p>
            </div>
            <a href="tel:+74991150876">+7 (499) 115-08-76</a>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center text-md font-bold">
            <div className="flex gap-2">
              <a href="mailto:example@example.com" className="text-sm font-bold">zakaz@city-met.ru</a>
            </div>
            <p className="text-xs font-semibold text-accent-foreground">Пн - Пт с 8:00 до 19:00</p>
            <p className="text-xs font-semibold text-accent-foreground">Сб - Вс с 8:00 до 18:00</p>
          </div>

        <div className="col-span-5 md:col-auto flex justify-center md:justify-start">
  <ul className="flex items-center  space-x-6 text-muted-foreground">
    <li className="font-medium text-accent hover:text-destructive">
      <a href="#"><FaTelegram className="size-6" /></a>
    </li>
    <li className="font-medium text-accent hover:text-destructive">
      <a href="#"><FaWhatsapp className="size-6" /></a>
    </li>
    <li className="font-medium text-accent hover:text-destructive">
      <a href="#"><FaViber className="size-6" /></a>
    </li>
  </ul>
</div>


          <div className="col-start-5 justify-self-end hidden md:block">
            <Button variant="outline" size="sm" className="border-accent hover:bg-accent/10 hover:text-destructive">
              Заказать Звонок
            </Button>
          </div>

          <div className="col-start-5 justify-self-end md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
