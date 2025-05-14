import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Logo } from "../navbar/logo";
import { asortiment } from "../navbar-02/config";
import { navItems } from "../navbar/nav-menu";

const groups = asortiment.filter(item => item.type === "group");
const Footer01Page = () => {
  return (
    <div className="mt-5 bg-accent text-primary flex flex-col">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-10 md:mx-auto grid grid-cols-5">
          <div className="py-12 col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
            {groups.map((group, index) => (
              <div key={index}>
                <h6 className="font-semibold">{group.title}</h6>
               
                <Link href={group.href} className="text-primary/80 hover:text-foreground">
                  Перейти к категории
                </Link>
              </div>
            ))}
          </div>
          <div className="py-12 col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {navItems.map((navItem, index) => (
              <div key={index}>
               
                <Link href={navItem.href} className="text-primary/80 hover:text-foreground">
                  {navItem.name}
                </Link>
              </div>
            ))}
          </div>
          <Separator className="w-full col-span-5 mx-auto" />
          <div className="col-span-5 mx-auto py-5 flex justify-between items-center">
            <Logo />

            <span className="text-primary/80 text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                METALL MOSKOW
              </Link>
              . All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer01Page;
