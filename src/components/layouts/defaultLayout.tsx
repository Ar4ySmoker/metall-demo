import NavbarVertical from "../navbar-vertical/navbar-verticat";
import { VerticalMenu } from "../navbar-vertical/vartical-menu";

const DefaultLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <VerticalMenu />
      {children}
    </div>
  );
};

export default DefaultLayout;
