import React from "react";

const StatsPage = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-screen-md  w-full py-12 px-6 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
Надёжный поставщик металлопроката для любых задач
        </h2>
        <p className="mt-6 text-lg max-w-2xl text-foreground/70">
         Компания «Металл Москва» — это ваш уверенный партнёр в поставке металла в розницу и оптом. Мы предлагаем широкий ассортимент черного проката с доставкой по Москве и Московской области. У нас легко заказать металл как для строительства, так и для частных нужд — быстро, выгодно и с гарантией качества.
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 justify-center">
          <div>
            <span className="text-5xl md:text-5xl font-bold ">
              1,000+
            </span>
            <p className="mt-6 font-semibold text-xl">
             Позиций на складе
            </p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              От арматуры до листового проката — всегда в наличии нужный вам металл.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-5xl font-bold ">
              50,000+
            </span>
            <p className="mt-6 font-semibold text-xl">
              Довольных клиентов
            </p>
            <p className="mt-2 text-[17px] text-muted-foreground">
             Строительные компании, производственные цеха и частные покупатели доверяют нам.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-5xl font-bold ">
           24/7
            </span>
            <p className="mt-6 font-semibold text-xl">Онлайн-заказ и консультации</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
             Оформляйте заказы в удобное время — мы всегда на связи.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-5xl font-bold ">
             12+
            </span>
            <p className="mt-6 font-semibold text-xl">Лет на рынке металлопроката</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
             Опыт, отточенный годами. Мы знаем, что важно нашим клиентам.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
