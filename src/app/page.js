"use client";

import Image from "next/image";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/home/HeroSection";
import { UpcomingMovielist } from "./_features/home/UpcomingMovieList";
import { Popular } from "./_features/home/PopularMovieList";
import { TopRated } from "./_features/home/topRatedMovie";
import { useEffect } from "react";
const BASE_URl = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";
export default function Home() {
  const getData = async () => {
    const UpcomingMovieList = `${BASE_URl}/movie/upcoming?language-en-US&page=1`;
    const response = await fetch(UpcomingMovieList, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response, "respone");
    const data = await response.json();
    console.log(data, "dfjbdfhui");
  };
  useEffect(() => {
    console.log("page running once");
    getData();
  }, []);
  return (
    <div>
      <Header />
      <HeroSection />
      <UpcomingMovielist />
      <Popular />
      <TopRated />
    </div>
  );
}
