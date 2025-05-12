import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { MapPinIcon } from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-muted">
      <nav className="h-16 bg-blue-950 text-white border-b flex items-center">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm: lg:px-8">

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>

          {/* <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button>Get Started</Button>

           
          </div> */}
        </div>
      </nav>
      <div className="h-20 bg-color-primary border-b flex items-center">
      <div className="h-full grid grid-cols-5 items-center justify-arround max-w-screen-xl mx-auto px-4 my-2 sm: lg:px-8">
        <Logo />
        <div className="flex flex-col items-center justify-center text-md font-bold">
          <div className="flex gap-2">
            <MapPinIcon />
            <p className="text-center text-sm">Москва и Московская область</p>
          </div>
          <a href="tel:+74991150876">+7 (499) 115-08-76</a>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex gap-2">
            <a href="mailto:example@example.com" className="text-sm font-bold">zakaz@city-met.ru</a>
          </div>
          <p className="text-xs font-semibold text-accent-foreground">Пн - Пт с 8:00 до 19:00</p>
          <p className="text-xs font-semibold text-accent-foreground">Сб - Вс с 8:00 до 18:00</p>
        </div>
        <div className="flex flex-col items-center justify-center text-md font-bold">
          <ul className="flex items-center space-x-6 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaInstagram className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaFacebook className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaTwitter className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaLinkedin className="size-6" />
                </a>
              </li>
            </ul>
        </div>
        <Button variant="outline" size='lg'>Заказать Звонок</Button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
