import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  Truck,        // Для доставки
  Ruler,        // Для резки в размер
  PackageCheck, // Для ассортимента
  HandCoins,    // Для цен и условий
  Factory,      // Для поставок с заводов
  ShieldCheck,  // Дополнительно — гарантия качества
} from "lucide-react";

const features = [
  {
    icon: PackageCheck, // Было Goal
    title: "Широкий ассортимент",
    description:
      "Арматура, трубы, уголки, швеллеры, листы и прочий черный металлопрокат",
  },
  {
    icon: Truck, // Было BookCheck
    title: "Быстрая доставка",
    description: "по Москве и МО — от 2 часов",
  },
  {
    icon: Ruler, // Было ChartPie
    title: "Резка в размер",
    description: "под ваш проект",
  },
  {
    icon: HandCoins, // Было Users
    title: "Честные цены и гибкие условия",
    description: "опт, розница, без скрытых наценок",
  },
  {
    icon: Factory, // Было FolderSync
    title: "Прямые поставки с заводов-производителей",
    description:
      "Северсталь, Евраз, Мечел, Санкт-Петербург, Казань, Ленинград, Пермь",
  },
];

const Delivery = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-12 px-6">
        <h2 className="text-xl md:text-3xl md:leading-[2rem] font-bold tracking-tight max-w-lg">
          Что мы предлагаем:
        </h2>
        <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden">
                    <div className="flex items-center gap-4">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <Image src="/images/armatura-32-mm.jpg" alt="Delivery" width={500} height={500}  className="w-full h-full object-cover rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
