"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function HiroAbout() {
  return (
    <section
      className="-mt-24 pt-45 bg-gray-50 py-32 relative overflow-hidden border-b-2 border-primary-custom"
      suppressHydrationWarning
    >
      <div className="w-[700px] h-[400px] bg-primary-custom rounded-full absolute -top-32 -right-24 blur-[60px] opacity-[0.13]"></div>
      <div className="w-[700px] h-[400px] bg-purple-800 rounded-full absolute -bottom-32 -left-24 blur-[60px] opacity-[0.13]"></div>
      <div
        className="container mx-auto grid gap-8 grid-cols-1-reverse md:grid-cols-2 px-8 text-center"
        suppressHydrationWarning
      >
        <div className="md:text-start flex flex-col w-full justify-center order-2 md:order-1">
          <h1
            className="text-5xl md:text-6xl font-bold leading-normal text-transparent bg-clip-text mb-6"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #E96E4D 0%, #D4346A 52%, #644B86 100%)",
            }}
          >
            Meet the team
            <br />
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">Home/About Us</p>
        </div>
        <div className="order-1 md:order-2">
          <Carousel
            className={"mx-auto"}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {[1, 2, 3, 4].map((item) => (
                <CarouselItem
                  key={item}
                  className={"flex justify-center items-center"}
                >
                  <Image
                    src={`/team/${item}.webp`}
                    alt="Team Member 1"
                    width={450}
                    height={450}
                    className="rounded-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
