import { VerticalMenu } from "@/components/navbar-vertical/vartical-menu";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  // Пример: убираем сайдбар на главной
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const showSidebar = !pathname.startsWith("/login");

  return (
    <div className="max-w-screen-xl mt-4 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-6">
        {showSidebar && (
          <div className="w-70 flex-shrink-0 hidden md:block">
            <VerticalMenu />
          </div>
        )}
        <div className={showSidebar ? "flex-1" : "w-full"}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
