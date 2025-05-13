import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

import { AuroraText } from "./magicui/aurora-text";

const catalog = [
  {
    icon: "/images/armatura.jpg",
    title: "Арматура",
    item: [
      { title: "Арматура А3 рифленая", href: "#" },
      { title: "Арматура А1 гладкая", href: "#" },
      { title: "Арматура композитная", href: "#" },
      { title: "Арматура А1 катанка", href: "#" },
    ],
  },
  {
    icon: "/images/truba.jpg",
    title: "Трубы профильные",
    item: [
      { title: "Квадратная", href: "#" },
      { title: "Прямоугольная", href: "#" },
      { title: "Оцинкованная", href: "#" },
      { title: "Тонкостенная", href: "#" },
    ],
  },
  {
    icon: "/images/truby.jpg",
    title: "Трубы",
    item: [
      { title: "Труба ВГП", href: "#" },
      { title: "Оцинкованная", href: "#" },
      { title: "Электросварная", href: "#" },
    ],
  },
  {
    icon: "/images/fason.jpg",
    title: "Фасонный прокат",
    item: [
      { title: "Балка двутавровая", href: "#" },
      { title: "Уголок", href: "#" },
      { title: "Швеллер", href: "#" },
    ],
  },
  {
    icon: "/images/sort.jpg",
    title: "Сортовой прокат",
    item: [
      { title: "Квадрат стальной", href: "#" },
      { title: "Плоский прокат", href: "#" },
      { title: "Полоса металлическая", href: "#" },
    ],
  },
  {
    icon: "/images/setka.jpg",
    title: "Сетка металлическая",
    item: [
      { title: "Сетка сварная в картах", href: "#" },
      { title: "Сетка сварная в рулонах", href: "#" },
      { title: "Сетка штукатурная тканая", href: "#" },
    ],
  },
  {
    icon: "/images/svai.jpg",
    title: "Винтовые сваи",
    item: [
      { title: "Сваи винтовые 57", href: "#" },
      { title: "Сваи винтовые 76", href: "#" },
      { title: "Сваи винтовые 89", href: "#" },
      { title: "Сваи винтовые 108", href: "#" },
    ],
  },
  {
    icon: "/images/dop.jpg",
    title: "Доп. материалы",
    item: [
      { title: "Заглушки для труб", href: "#" },
      { title: "Петли", href: "#" },
      { title: "Фиксатор звездочка", href: "#" },
      { title: "Фиксатор стульчик", href: "#" },
  
    ],
  },
  {
    icon: "/images/zabor.jpg",
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
       {catalog.map((item) => (
  <div key={item.title}>
    <Card className="bg-accent/30 hover:ring rounded-lg p-4">
      
      {/* Заголовок на всю ширину */}
      <h3 className="font-semibold tracking-tight text-lg mb-4">
        {item.title}
      </h3>

      {/* Блок: картинка + список */}
      <div className="flex items-start gap-4">
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
))}
        </div>
      </div>
  );
};

export default AsortimentBlock2;
