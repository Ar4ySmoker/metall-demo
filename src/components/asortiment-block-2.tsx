import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

import { AuroraText } from "./magicui/aurora-text";

const catalog = [
  {
    icon: "/images/armatura-a3.jpg",
    title: "Арматура",
    item: [
      { title: "Арматура А3 рифленая", href: "#" },
      { title: "Арматура А1 гладкая", href: "#" },
      { title: "Арматура композитная", href: "#" },
      { title: "Арматура А1 катанка", href: "#" },
    ],
  },
  {
    icon: "/images/armatura-a3.jpg",
    title: "Трубы профильные",
    item: [
      { title: "Квадратная", href: "#" },
      { title: "Прямоугольная", href: "#" },
      { title: "Оцинкованная", href: "#" },
      { title: "Тонкостенная", href: "#" },
    ],
  },
  {
    icon: "/images/armatura-a3.jpg",
    title: "Трубы",
    item: [
      { title: "Труба ВГП", href: "#" },
      { title: "Оцинкованная", href: "#" },
      { title: "Электросварная", href: "#" },
      { title: "Электросварная", href: "#" },
    ],
  },
  {
    icon: "/images/armatura-a3.jpg",
    title: "Фасонный прокат",
    item: [
      { title: "Балка двутавровая", href: "#" },
      { title: "Уголок", href: "#" },
      { title: "Швеллер", href: "#" },
    ],
  },
  {
    icon: "/images/armatura-a3.jpg",
    title: "Сортовой прокат",
    item: [
      { title: "Квадрат стальной", href: "#" },
      { title: "Плоский прокат", href: "#" },
      { title: "Полоса металлическая", href: "#" },
    ],
  },
  {
    icon: "/images/armatura-a3.jpg",
    title: "Сетка металлическая",
    item: [
      { title: "Сетка сварная в картах", href: "#" },
      { title: "Сетка сварная в рулонах", href: "#" },
      { title: "Сетка штукатурная тканая", href: "#" },
    ],
  },
  {
    icon: "/images/armatura-a3.jpg",
    title: "Винтовые сваи",
    item: [
      { title: "Сваи винтовые 57", href: "#" },
      { title: "Сваи винтовые 76", href: "#" },
      { title: "Сваи винтовые 89", href: "#" },
      { title: "Сваи винтовые 108", href: "#" },
    ],
  },
  {
    icon: "/images/armatura-a3.jpg",
    title: "Доп. материалы",
    item: [
      { title: "Заглушки для труб", href: "#" },
      { title: "Петли", href: "#" },
      { title: "Фиксатор звездочка", href: "#" },
      { title: "Фиксатор стульчик", href: "#" },
  
    ],
  },
  {
    icon: "/images/armatura-a3.jpg",
    title: "Все для забора",
    item: [
      { title: "Профнастил крашеный", href: "#" },
      { title: "Профнастил оцинкованный", href: "#" },
      { title: "Труба профильная", href: "#" },
      { title: "Заглушки для труб", href: "#" },
    ],
  },
  // {
  //   icon: "/images/fundament.jpg",
  //   title: "Все для фундамента",
  //   item: [
  //     { title: "Арматура А3 Рифленая", href: "#" },
  //     { title: "Арматура А1 катанка", href: "#" },
  //     { title: "Арматура композитная", href: "#" },
  //     { title: "Проволока вязальная", href: "#" },
  //   ],
  // },
];


const AsortimentBlock2 = () => {
  
  return (
      <div className="max-w-screen-xl mx-auto w-full py-10 px-2">
        <AuroraText
        colors={["#8C2641", "#202614", "#838C64", "#545928"]}
        className="text-4xl text-center md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto"
        >
          Ассортимент
        </AuroraText>
        <div className="mt-4 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {/* {catalog.map((item) => {
  const delay = (Math.random() * 4).toFixed(2);      
  const duration = (4 + Math.random() * 4).toFixed(2); 

  return (
    <div key={item.title} className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-md animate-pulse"
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          zIndex: -1, 
        }}
      ></div>

      
      <Card className="p-5 border relative bg-transparent dark:from-slate-900 dark:to-slate-700 rounded-md">
        <h3 className="font-semibold tracking-tight text-lg mb-4">
          {item.title}
        </h3>

        <div className="flex items-start gap-4">
          <Image
            src={item.icon}
            alt="icon"
            width={100}
            height={100}
            className="h-24 w-24 rounded-lg bg-muted shrink-0"
          />

          <div className="space-y-2 text-sm text-muted-foreground">
            {item.item.map((subItem, index) => (
              <div key={index}>
                <Link
                  href={subItem.href}
                  className="text-xs font-semibold tracking-tight text-muted-foreground hover:text-card-foreground hover:underline"
                >
                  {subItem.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
})} */}
{catalog.map((item) => {
  

  return (
    <div key={item.title} className="relative overflow-hidden rounded-md">
      {/* Фоновая картинка с размытой областью и градиентом прозрачности */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.icon})`,
          filter: 'blur(10px)',
          opacity: 0.3,
          maskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
          zIndex: -1,
        }}
      ></div>

      {/* Контент карточки */}
      <Card className="p-5 border relative bg-transparent dark:from-slate-900 dark:to-slate-700 rounded-md">
        {/* Заголовок на всю ширину */}
        <h3 className="font-semibold tracking-tight text-lg mb-4">
          {item.title}
        </h3>

        {/* Блок: картинка + список */}
        <div className="grid grid-cols-2 gap-4">
          {/* Картинка слева */}
          <Image
            src={item.icon}
            alt="icon"
            width={100}
            height={100}
            className="h-24 w-24 rounded-lg bg-muted shrink-0"
          />

          {/* Список ссылок справа */}
          <div className="space-y-2 text-sm text-muted-foreground">
            {item.item.map((subItem, index) => (
              <div key={index}>
                <Link
                  href={subItem.href}
                  className="text-md font-semibold tracking-tight text-muted-foreground hover:text-card-foreground hover:underline"
                >
                  {subItem.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
})}



        </div>
      </div>
  );
};

export default AsortimentBlock2;
