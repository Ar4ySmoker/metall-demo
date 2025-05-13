import { NavMenu } from "./nav-menu";

const Navbar03 = () => {
  return (
    <div className=" bg-slate-800">
      <nav className="h-16 bg-slate-200 border-b">
        <div className="h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <NavMenu  />
        </div>
      </nav>
    </div>
  );
};

export default Navbar03;
