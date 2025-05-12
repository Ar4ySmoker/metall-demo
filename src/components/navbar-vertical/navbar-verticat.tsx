import { NavMenu } from "./nav-menu";

const NavbarVertical = () => {
  return (
    <div className=" bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <NavMenu  />
        </div>
      </nav>
    </div>
  );
};

export default NavbarVertical;
