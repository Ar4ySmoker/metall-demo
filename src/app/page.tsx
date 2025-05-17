import Avantages from "@/components/advantages";
import { AnimatedListDemo } from "@/components/animatedList";
import AsortimentBlock2 from "@/components/asortiment-block-2";
import CarouselWithPagination from "@/components/carousel-06";
import Contact02Page from "@/components/contact-02/contact-02";
import Delivery from "@/components/delivery";
import DefaultLayout from "@/components/layouts/defaultLayout";
import LogosPage from "@/components/logos/logos";
import ProductsCard from "@/components/productsCard";
import StatsPage from "@/components/stats-02/stats-02";


export default function Home() {
  return (
    <>
      {/* Контент с боковым меню */}
      <DefaultLayout showSidebar={true}>
        <div>
          <CarouselWithPagination />
          <div className="mt-4">
            <h1 className="text-2xl font-bold">
             Купить металл и металлопрокат в розницу и оптом — Металл Москва
            </h1>
            <p className="mt-2 text-gray-600">
Ищете, где выгодно купить металл и металлопрокат в Москве? Компания Металл Москва — ваш надёжный поставщик стального проката с доставкой по Москве и области. Мы работаем как с розничными покупателями, так и с крупными строительными организациями. У нас можно заказать металл от 1 метра до нескольких тонн — без лишних условий и переплат.            </p>
          </div>
        </div>
      <Delivery />
      </DefaultLayout>
<div className="max-w-screen-xl grid grid-cols-3 gap-5 mt-4 mx-auto px-4 sm:px-6 lg:px-8 xs:hidden">
<AnimatedListDemo className="col-span-1 my-auto"/>
<div className="col-span-2">
<StatsPage />
</div>
</div>
      <AsortimentBlock2 />

      {/* <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-bold mb-6">Товары по акции</h3>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </div> */}

      <LogosPage />
      <Avantages />
      <Contact02Page />
      
    </>
  );
}
