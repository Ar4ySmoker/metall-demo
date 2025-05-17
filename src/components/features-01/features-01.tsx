import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Settings2,
    title: "Широкий ассортимент в наличии",
    description:
      "от арматуры до труб",
  },
  {
    icon: Blocks,
    title: "Гибкие условия покупки ",
    description:
      "от 1 метра до оптовых поставок",
  },
  {
    icon: Bot,
    title: "Прозрачные и честные цены",
    description:
      "",
  },
  {
    icon: Film,
    title: "Собственная доставка по Москве и области",
    description:
      "",
  },
  {
    icon: ChartPie,
    title: " Бесплатная резка металла по размерам заказчика",
    description:
      "",
  },
  {
    icon: MessageCircle,
    title: "Склад рядом с МКАД ",
    description:
      "удобно забирать.",
  },
  {
    icon: MessageCircle,
    title: "Акции и скидки постоянным клиентам",
    description:
      "",
  },
  {
    icon: MessageCircle,
    title: "Профессиональные консультации онлайн и по телефону",
    description:
      "",
  },
];

const Features01Page = () => {
  return (
    <div className=" flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
Наши преимущества        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;
