export const asortiment = [
  { type: "group", title: "Арматура", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Арматура А3 рифленая" },
  { type: "item", title: "Арматура А1 Гладкая" },
  { type: "item", title: "Арматура композитная" },
  { type: "group", title: "Труба профильная", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Труба профильная квадратная" },
  { type: "item", title: "Труба профильная прямоугольная" },
  { type: "item", title: "Труба профильная оцинкованная" },
  { type: "group", title: "Трубы", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Труба электросварная" },
  { type: "item", title: "Труба водогазопроводная" },
  { type: "item", title: "Труба оцинкованная" },
  { type: "group", title: "Квадрат стальной" },
  { type: "item", title: "Квадрат стальной" },
  { type: "group", title: "Проволока", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Проволока" },
  { type: "group", title: "Балка двутавровая" },
  { type: "item", title: "Балка двутавровая" },
  { type: "group", title: "Уголок", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Равнополочный" },
  { type: "item", title: "Неравнополочный" },
  { type: "group", title: "Швеллер", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Швеллер" },
  { type: "item", title: "Швеллер гнутый" },
  { type: "group", title: "Лист металлический", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Лист стальной гладкий" },
  { type: "item", title: "Лист рифленый" },
  { type: "item", title: "Лист оцинкованный" },
  { type: "item", title: "Лист просечно-вытяжной" },
  { type: "group", title: "Полоса металлическая", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Полоса стальная" },
  { type: "item", title: "Полоса оцинкованная" },
  { type: "group", title: "Профнастил" },
  { type: "item", title: "Профнастил крашеный", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Профнастил оцинкованный" },
  { type: "group", title: "Металлический штакетник" },
  { type: "item", title: "Металлический штакетник" },
  { type: "group", title: "Отводы стальные", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Отводы неоцинкованные" },
  { type: "item", title: "Отводы оцинкованные" },
  { type: "group", title: "Сетка металлическая", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Сетка сварная в картах" },
  { type: "item", title: "Сетка сварная рулон" },
  { type: "item", title: "Сетка рабица" },
  { type: "item", title: "Сетка штукатурная (тканая)" },
  { type: "group", title: "Дополнительные материалы", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Заглушки для профильных труб" },
  { type: "item", title: "Фиксатор звездочка" },
  { type: "item", title: "Фиксатор стульчик" },
  { type: "item", title: "Петли" },
  { type: "item", title: "Саморезы" },
  { type: "item", title: "Электроды" },
];

export const asortimentWithSubcategories = [
  { type: "group", title: "Арматура", image: "/images/armatura-a3.jpg" },
  {
    type: "item",
    title: "Арматура А3 рифленая",
    children: [
      { title: "Арматура А3 12 мм", href: "/armatura-a3-12" },
      { title: "Арматура А3 14 мм", href: "/armatura-a3-14" },
      { title: "Арматура А3 16 мм", href: "/armatura-a3-16" },
    ],
  },
  {
    type: "item",
    title: "Арматура А1 Гладкая",
    children: [
      { title: "Арматура А1 6 мм", href: "/armatura-a1-6" },
      { title: "Арматура А1 8 мм", href: "/armatura-a1-8" },
      { title: "Арматура А1 10 мм", href: "/armatura-a1-10" },
    ],
  },
  { type: "item", title: "Арматура композитная" },

  { type: "group", title: "Труба профильная", image: "/images/armatura-a3.jpg" },
  {
    type: "item",
    title: "Труба профильная квадратная",
    children: [
      { title: "20x20x2 мм", href: "/truba-kvadrat-20x20x2" },
      { title: "40x40x3 мм", href: "/truba-kvadrat-40x40x3" },
    ],
  },
  {
    type: "item",
    title: "Труба профильная прямоугольная",
    children: [
      { title: "40x20x2 мм", href: "/truba-pryam-40x20x2" },
      { title: "60x40x3 мм", href: "/truba-pryam-60x40x3" },
    ],
  },
  { type: "item", title: "Труба профильная оцинкованная" },

  { type: "group", title: "Трубы", image: "/images/armatura-a3.jpg" },
  {
    type: "item",
    title: "Труба электросварная",
    children: [
      { title: "Ø20 мм", href: "/truba-esw-20" },
      { title: "Ø32 мм", href: "/truba-esw-32" },
    ],
  },
  { type: "item", title: "Труба водогазопроводная" },
  { type: "item", title: "Труба оцинкованная" },

  { type: "group", title: "Квадрат стальной" },
  {
    type: "item",
    title: "Квадрат стальной",
    children: [
      { title: "10x10 мм", href: "/kvadrat-10x10" },
      { title: "20x20 мм", href: "/kvadrat-20x20" },
      { title: "30x30 мм", href: "/kvadrat-30x30" },
    ],
  },

  { type: "group", title: "Проволока", image: "/images/armatura-a3.jpg" },
  {
    type: "item",
    title: "Проволока",
    children: [
      { title: "Оцинкованная", href: "/provoloka-oc" },
      { title: "Черная", href: "/provoloka-black" },
      { title: "Связанная", href: "/provoloka-bound" },
    ],
  },

  { type: "group", title: "Балка двутавровая" },
  {
    type: "item",
    title: "Балка двутавровая",
    children: [
      { title: "20Б1", href: "/balka-20b1" },
      { title: "30Б1", href: "/balka-30b1" },
    ],
  },

  { type: "group", title: "Уголок", image: "/images/armatura-a3.jpg" },
  {
    type: "item",
    title: "Равнополочный",
    children: [
      { title: "25x25x3", href: "/ugolok-25x25x3" },
      { title: "50x50x5", href: "/ugolok-50x50x5" },
    ],
  },
  {
    type: "item",
    title: "Неравнополочный",
    children: [
      { title: "50x30x4", href: "/ugolok-50x30x4" },
      { title: "75x50x6", href: "/ugolok-75x50x6" },
    ],
  },

  { type: "group", title: "Швеллер", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Швеллер" },
  { type: "item", title: "Швеллер гнутый" },

  { type: "group", title: "Лист металлический", image: "/images/armatura-a3.jpg" },
  {
    type: "item",
    title: "Лист стальной гладкий",
    children: [
      { title: "1.5 мм", href: "/list-glad-1-5" },
      { title: "3 мм", href: "/list-glad-3" },
      { title: "5 мм", href: "/list-glad-5" },
    ],
  },
  { type: "item", title: "Лист рифленый" },
  { type: "item", title: "Лист оцинкованный" },
  { type: "item", title: "Лист просечно-вытяжной" },

  // остальные оставим без вложенности
  { type: "group", title: "Полоса металлическая", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Полоса стальная" },
  { type: "item", title: "Полоса оцинкованная" },

  { type: "group", title: "Профнастил" },
  { type: "item", title: "Профнастил крашеный", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Профнастил оцинкованный" },

  { type: "group", title: "Металлический штакетник" },
  { type: "item", title: "Металлический штакетник" },

  { type: "group", title: "Отводы стальные", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Отводы неоцинкованные" },
  { type: "item", title: "Отводы оцинкованные" },

  { type: "group", title: "Сетка металлическая", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Сетка сварная в картах" },
  { type: "item", title: "Сетка сварная рулон" },
  { type: "item", title: "Сетка рабица" },
  { type: "item", title: "Сетка штукатурная (тканая)" },

  { type: "group", title: "Дополнительные материалы", image: "/images/armatura-a3.jpg" },
  { type: "item", title: "Заглушки для профильных труб" },
  { type: "item", title: "Фиксатор звездочка" },
  { type: "item", title: "Фиксатор стульчик" },
  { type: "item", title: "Петли" },
  { type: "item", title: "Саморезы" },
  { type: "item", title: "Электроды" },
];
