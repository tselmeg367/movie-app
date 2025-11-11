"use client";
import { useState, useEffect } from "react";
import RightIcon from "@/app/_icons/rightIcon";
import rightIcon from "@/app/_icons/rightIcon";
import { MovieCard } from "../../_components/MovieCard";
import { BigCards } from "@/app/_components/BigCards";
const BASE_URl = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export const Popular = () => {
  const [popularmovieData, setPopularMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const PopularMovieList = `${BASE_URl}/movie/popular?language=en-US&page=1`;
    const response = await fetch(PopularMovieList, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPopularMovieData(data.results);
  };
  setTimeout(() => {
    setLoading(false);
  }, "1500");

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <BigCards />;
  }

  return (
    <div className=" pt-[54px] px-[80px] ">
      <div className="flex flex-row justify-center">
        <div className="flex w-[1277px] justify-between items-start">
          <p className="text-[#09090B] font-inter text-[24px] not-italic font-semibold leading-[32px] tracking-[-0.6px]">
            Popular
          </p>
          <p className="flex h-[36px] px-4 py-2 justify-center items-center gap-2">
            See more <RightIcon />
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          {popularmovieData.slice(6, 11).map((movie, index) => {
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
        <div className="flex flex-row gap-8"></div>
      </div>
    </div>
  );
};
