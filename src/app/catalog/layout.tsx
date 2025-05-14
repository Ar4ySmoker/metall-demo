import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { VerticalMenu } from "@/components/navbar-vertical/vartical-menu";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
 

  return (
    <div className="max-w-screen-xl mt-4 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-6">
          <div className="w-70 flex-shrink-0 hidden md:block">
            <VerticalMenu />
            <div className="mt-4 w-screen">
            <Breadcrumbs/>
            </div>
          </div>
        <div className={"flex-1 w-full"}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
