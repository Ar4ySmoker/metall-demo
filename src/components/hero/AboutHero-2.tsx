import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
export const AboutHero2 = () => {
  return (
    <div className=" flex items-center justify-center">
          <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
              <div>
                  
                  <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
О нас                  </h1>
                  <p className="mt-6 max-w-[60ch] text-lg">
                     «Металл Москва» — это команда опытных специалистов, работающих на рынке металлопроката уже много лет. За это время мы стали надежным партнером для частных клиентов и строительных организаций.

Мы предлагаем продукцию напрямую от ведущих металлургических предприятий России, таких как:

Северсталь

Магнитогорский металлургический комбинат

Новолипецкий металлургический комбинат

Волжский трубный завод

Мечел и другие

Прямые поставки позволяют нам обеспечивать стабильное качество продукции и конкурентные цены без посредников.


                  </p>
                
              </div>
              <div className="w-full aspect-video bg-accent rounded-xl" />
          </div>
      </div>
  )}