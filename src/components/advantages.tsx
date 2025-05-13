import React from "react";
import { NumberTicker } from "./magicui/number-ticker";
import { TypingAnimation } from "./magicui/typing-animation";
import { FlipText } from "./magicui/flip-text";

const Avantages = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto  text-center">
        <TypingAnimation className="text-4xl md:text-5xl font-semibold">Почему Металл Моссква?</TypingAnimation>
        <FlipText className="mt-6 text-lg">Потому что работая с нами вы получите...</FlipText>

        <div className="mt-6 sm:mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 justify-center">
          <div className="max-w-[18ch]">
            <p className="text-5xl font-semibold"><NumberTicker
      value={100}
      className="whitespace-pre-wrap text-5xl font-semibold tracking-tighter text-black dark:text-white"
    /><span>%</span></p>
            <p className="mt-6 text-lg">
              доставка в назаначенный день заказа по Москве и МО, 
            </p>
          </div>
          <div className="max-w-[18ch]">
           <p className="text-5xl font-semibold"><NumberTicker
      value={100}
      className="whitespace-pre-wrap text-5xl font-semibold tracking-tighter text-black dark:text-white"
    /><span>%</span></p>
            <p className="mt-6 text-lg">
              качества и гарантии на все товары
            </p>
          </div>
          <div className="max-w-[18ch]">
            <p className="text-5xl font-semibold"><span>от </span><NumberTicker
      value={5}
      className="whitespace-pre-wrap text-5xl font-semibold tracking-tighter text-black dark:text-white"
    /><span>%</span></p>
            <p className="mt-6 text-lg">
              скидки на оптовые закупки, и постоянным клиентам
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avantages;
