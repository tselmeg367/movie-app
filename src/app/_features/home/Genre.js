"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { components } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import RightIcon from "@/app/_icons/rightIcon";
import MiniRightIcon from "@/app/_icons/MiniRightIcon";
import { useRouter } from "next/navigation";
const BASE_URl = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export function NavigationMenuDemo() {
  const [genres, setGenres] = useState([]);

  const router = useRouter();
  const getData = async () => {
    const genreList = `${BASE_URl}/genre/movie/list?language=en`;
    const response = await fetch(genreList, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setGenres(data.genres);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleMoreButton = (id) => {
    router.push(`/genres/${id}`);
  };
  console.log(genres, "genresdata");
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger className=" rounded-md border border-[#E4E4E7] bg-white shadow-sm ">
          Genre
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <div className="w-[537px] h-[333px] p-5">
            <div className="flex w-[213px] flex-col items-start gap-[4px]">
              <p className="text-[#09090B] font-inter text-2xl font-semibold leading-8 tracking-[-0.6px] not-italic">
                Genres
              </p>
              <p className="text-[#09090B] font-inter text-base font-normal leading-6 not-italic">
                See lists of movies by genre
              </p>
            </div>
            <div className="my-[16px] border-b-1 h-[1px] border-[#E4E4E7]"></div>

            <div className="flex flex-wrap flex-row gap-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {genres.map((genre, index, id) => (
                <Badge
                  className="flex bg-white flex-wrap  border border-[var(--border-border-border,#E4E4E7)]  items-start content-start gap-x-[var(--spacing-4,16px)] gap-y-[16px] self-stretch text-[var(--text-text-foreground,#09090B)] font-inter text-xs font-semibold leading-4 not-italic"
                  key={index}
                  onClick={() => handleMoreButton(genre.id)}
                >
                  {genre.name} <MiniRightIcon />
                </Badge>
              ))}
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
