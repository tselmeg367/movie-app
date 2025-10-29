"use client";
import { Carousel, CarouselDots } from "@/components/ui/carousel";
import { CarouselContent } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CarouselNext } from "@/components/ui/carousel";
import { CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const BASE_URl = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export const HeroSection = () => {
  const [popularmovieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const upcomingMovieList = `${BASE_URl}/movie/now_playing?language=en-US&page=1`;
    const response = await fetch(upcomingMovieList, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setMovieData(data.results);
  };
  setTimeout(() => {
    setLoading(false);
  }, "1500");

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div className="bg-[#F4F4F5] w-full aspect-[12/5]  h-[600px]"></div>;
  }
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {popularmovieData.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}
                className={`bg-cover bg-center  bg-no-repeat w-full aspect-[12/5]  flex justify-center items-center`}
              >
                <CardContent className="flex items-center justify-center p-6"></CardContent>
              </div>
            </div>{" "}
            <CarouselDots />
          </CarouselItem>
        ))}{" "}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-6 bg-[#F4F4F5] text-black rounded-full p-3 flex items-center justify-center w-[40px] h-[40px]" />
      <CarouselNext className="absolute top-1/2 right-6 bg-[#F4F4F5] text-black rounded-full p-3 flex items-center justify-center w-[40px] h-[40px]" />
    </Carousel>
  );
};
