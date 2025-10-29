"use client";

import Image from "next/image";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/home/HeroSection";
import { UpcomingMovieList } from "./_features/home/UpcomingMovieList";
import { Popular } from "./_features/home/PopularMovieList";
import { TopRated } from "./_features/home/topRatedMovie";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center box-border">
      <Header />

      <HeroSection />
      <UpcomingMovieList />
      <Popular />
      <TopRated />
    </div>
  );
}
