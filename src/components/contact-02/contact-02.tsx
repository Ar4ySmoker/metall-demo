import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { ShineBorder } from "../magicui/shine-border";

const Contact02Page = () => (
  <div className="min-h-screen flex items-center justify-center py-16">
    <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <h2 className="mt-3 text-center text-3xl md:text-4xl font-bold tracking-tight">
        Не смогли дозвонится?
      </h2>
      <p className="mt-3 text-center text-base sm:text-lg">
        Оставьте свои данные и мы вам перезвоним
      </p>
      <div className="mt-24">
        

        {/* Form */}
        <Card className="relative overflow-hidden max-w-[450px] w-full mx-auto">
                <ShineBorder shineColor={["#8C2641", "#F2F2F2", "#838C64"]} />

          <CardContent className="p-6 md:p-10">
            <form>
                <div >
                  <Label htmlFor="firstName">Имя</Label>
                  <Input
                    placeholder="Иван"
                    id="name"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
               
                <div >
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    type="phone"
                    placeholder="+7 (999) 999-99-99"
                    id="phone"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div >
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Нужено 3 т. арматуры А3"
                    className="mt-1.5 bg-white shadow-none"
                    rows={6}
                  />
                </div>
                {/* <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" />
                  <Label htmlFor="acceptTerms">
                    You agree to our{" "}
                    <Link href="#" className="underline">
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div> */}
              <Button className="mt-6 w-full bg-accent text-white hover:bg-accent/90 hover:text-primary" size="lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact02Page;
