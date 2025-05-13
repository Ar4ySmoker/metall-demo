import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "./logos-card";
import {Marquee} from "@/components/magicui/marquee";

const LogosPage = () => {
  return (
    <div className="my-5 flex items-center justify-center px-6">
      <div className="overflow-hidden">
        <p className="text-center text-xl font-medium">
         Нам доверяют более 200 компаний и производителей металлопроката
        </p>

        <div className="mt-5 flex items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
          <Marquee pauseOnHover className="[--duration:20s] [&_svg]:mr-10">
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LogosPage;
