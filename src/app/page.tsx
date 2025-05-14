import Avantages from "@/components/advantages";
import AsortimentBlock2 from "@/components/asortiment-block-2";
import CarouselWithPagination from "@/components/carousel-06";
import Contact02Page from "@/components/contact-02/contact-02";
import Delivery from "@/components/delivery";
import DefaultLayout from "@/components/layouts/defaultLayout";
import LogosPage from "@/components/logos/logos";
import ProductsCard from "@/components/productsCard";



export default function Home() {
  return (
    <>
      {/* Контент с боковым меню */}
      <DefaultLayout showSidebar={true}>
        <div>
          <CarouselWithPagination />
          <div className="mt-4">
            <h1 className="text-2xl font-bold">
              Купить металл и металлопрокат в розницу и оптом - металлобаза
            </h1>
            <p className="mt-2 text-gray-600">
              Хотите купить металл и металлопрокат в розницу и оптом в Москве и Московской области? Добро пожаловать в интернет магазин металлопроката Сити Металл компании ООО «Сити Строй». Наша компания занимается продажей стального черного металлопроката оптом и в розницу по низким ценам. Мы готовы продавать товар, как от 1 погонного метра, так и по несколько тонн. Наша металлобаза в Москве предлагает заказать металл онлайн с доставкой и нарезкой изделий в размер заказчика.
            </p>
          </div>
        </div>
      </DefaultLayout>

      {/* Остальной контент на всю ширину */}
      <AsortimentBlock2 />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-bold mb-6">Товары по акции</h3>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </div>

      <Delivery />
      <LogosPage />
      <Avantages />
      <Contact02Page />
      
    </>
  );
}
