"use client";

import { MovieCard } from "../../_components/MovieCard";
import { Header } from "@/app/_features/Header";
import { useState, useNumber, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
const BASE_URl = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function UpcomingMovie() {
  const [movieData, setMovieData] = useState([]);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const getData = async () => {
    const UpcomingMovie = `${BASE_URl}/movie/upcoming?language=en-US&page=${page}`;
    const response = await fetch(UpcomingMovie, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setMovieData(data.results);
  };
  useEffect(() => {
    getData();
  }, [page]);
  console.log(typeof page);

  return (
    <div>
      <Header />
      <div className="px-[80px] pt-[52px]">
        <div className="flex flex-row justify-center pb-[32px]">
          <div className="flex w-[1277px] justify-between items-start">
            <p className="text-[#09090B] font-inter text-[24px] not-italic font-semibold leading-[32px] tracking-[-0.6px]">
              Upcoming
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-8">
          {" "}
          <div className="flex flex-row gap-8 justify-center">
            {movieData.slice(0, 5).map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  movieId={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              );
            })}{" "}
          </div>
          <div className="flex flex-row gap-8 justify-center">
            {movieData.slice(6, 11).map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  movieId={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-row gap-8"></div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${Number(page) - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`?page=${Number(page) - 1}`}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {" "}
              {page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`?page=${Number(page) + 1}`}>
              {Number(page) + 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`?page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
