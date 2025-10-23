import { Carousel } from "@/components/ui/carousel";
import { CarouselContent } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CarouselNext } from "@/components/ui/carousel";
import { CarouselPrevious } from "@/components/ui/carousel";
export const HeroSection = () => {
  return (
    <Carousel className="w-full max-w-xs p-[20px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
