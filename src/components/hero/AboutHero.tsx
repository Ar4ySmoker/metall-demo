import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
export const AboutHero = () => {
  return (
    <div className=" flex items-center justify-center">
          <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
              <div>
                  <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
О компании «Металл Москва»
                  </h1>
                  <p className="mt-6 max-w-[60ch] text-lg">
                      Добро пожаловать в интернет-магазин «Металл Москва» — надежного поставщика качественного металлопроката в Москве и Московской области.
Мы предлагаем широкий ассортимент металлоизделий по выгодным ценам с быстрой доставкой и профессиональным обслуживанием.
                  </p>
                  
              </div>
              <div className="w-full aspect-video bg-accent rounded-xl" />
          </div>
      </div>
  )}