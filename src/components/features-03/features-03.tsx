import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, Settings2 } from "lucide-react";

const Features03Page = () => {
  return (
    <><div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
          Услуги <br/>В дополнение к продаже металлопроката мы предлагаем:
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl"></div>

            <span className="text-2xl font-semibold tracking-tight">
             Доставку собственным транспортом 
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                   в кратчайшие сроки
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    Embed polls, quizzes, or forms to keep your audience
                    engaged.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-12 w-full">
              Build your strategy <ArrowRight />
            </Button>
          </div>
          {/* Media 1 Desktop */}
          <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>

          {/* Media 2 Desktop */}
          <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>
          {/* Card 2 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl"></div>

            <span className="text-2xl font-semibold tracking-tight">
             Резку металла 
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                   по размерам под заказ
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    Embed polls, quizzes, or forms to keep your audience
                    engaged.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-12 w-full">
              Build your strategy <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className=" flex flex-col">
        <div className="grow shrink-0 bg-muted basis-1/2"></div>
        <div className="relative grow">
          <div className="sm:absolute sm:-translate-y-1/2 top-0 inset-x-0 mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col lg:flex-row lg:items-center justify-between gap-10 rounded-lg bg-background sm:shadow-lg dark:shadow-foreground/10 py-14 px-10">
            <div className="shrink-0">
              <h3 className="text-4xl font-bold tracking-tight">Trusted by</h3>
              <p className="mt-6 text-lg max-w-xl lg:max-w-md xl:max-w-xl">
                Trusted by industry leaders and visionaries who are shaping the
                future, solving global challenges, and driving innovation forward.
              </p>
            </div>
          
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-12 px-6 mt-20">
              <h3 className="text-4xl font-bold tracking-tight">Trusted by</h3>
              <p className="mt-6 text-lg  ">
                Trusted by industry leaders and visionaries who are shaping the
                future, solving global challenges, and driving innovation forward.
              </p>
            </div>
      </>
  );
};

export default Features03Page;
