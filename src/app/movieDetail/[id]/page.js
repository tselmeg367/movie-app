"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MovieCard } from "../../_components/MovieCard";
import { Header } from "@/app/_features/Header";
const BASE_URl = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [movieDetailsData, setMovieData] = useState([]);
  const [moviePeople, setPeople] = useState([]);
  const [moreLike, setMore] = useState([]);
  const directorNames = moviePeople?.crew
    ?.filter((p) => p.job === "Director")
    .map((p) => p.name)
    .join(" · ");

  const writerNames = moviePeople?.crew
    ?.filter((p) => p.department === "Writing")
    .map((p) => p.name)
    .join(" · ");

  const starNames = moviePeople?.cast
    ?.slice(0, 3)
    .map((p) => p.name)
    .join(" · ");

  const getPeopleData = async () => {
    const moviesPeople = `${BASE_URl}/movie/${id}/credits?language=en-US`;
    const response = await fetch(moviesPeople, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPeople(data);
  };
  console.log(moviePeople, "bi.end.bna");
  const getMovieData = async () => {
    const movieDetails = `${BASE_URl}/movie/${id}?language=en-US`;
    const response = await fetch(movieDetails, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setMovieData(data);
    console.log(data, "bi.end.bn");
  };
  const getMoreLike = async () => {
    const moreLike = `${BASE_URl}/movie/${id}/similar?language=en-US&page=1`;
    const response = await fetch(moreLike, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setMore(data.results);
  };
  console.log(moreLike, "moreLike");
  useEffect(() => {
    getMovieData();
    getPeopleData();
    getMoreLike();
  }, [id]);
  const handleMoreButton = () => {
    router.push("/movies/upcoming");
  };
  const movieDetail = movieDetailsData;

  // console.log(moviePeopleDatas, "moviePeopleDatas");
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="px-[180px] pt-[56px] pb-16 flex flex-col gap-10">
        {/* Title + rating */}
        <section className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h1 className="text-[36px] font-bold tracking-[-0.9px] text-[#09090B]">
              {movieDetail?.title}
            </h1>
            <p className="text-lg font-normal leading-7 text-[#09090B]">
              {movieDetail?.release_date} · PG ·{" "}
              {movieDetail?.runtime != null && (
                <>
                  {Math.floor(movieDetail.runtime / 60)}h{" "}
                  {movieDetail.runtime % 60}m
                </>
              )}
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="font-medium text-gray-600 text-[16px] mb-1">Rating</p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">⭐</span>
              <span className="font-semibold text-[20px]">
                {movieDetail?.vote_average?.toFixed(1)}
              </span>
              <span className="text-gray-500 text-sm">
                /10 ·{" "}
                {movieDetail?.vote_count &&
                  `${Math.round(movieDetail.vote_count / 1000)}k`}
              </span>
            </div>
          </div>
        </section>

        {/* Poster + backdrop */}
        <section className="flex flex-row gap-8">
          <img
            className="w-[290px] h-[428px] rounded-lg object-cover shadow-md"
            src={`https://image.tmdb.org/t/p/original${movieDetail?.poster_path}`}
            alt={movieDetail?.title}
          />
          <div className="relative">
            <img
              className="w-[760px] h-[480px] rounded-lg object-cover shadow-md"
              src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
              alt={movieDetail?.title}
            />
            <button className="absolute left-6 bottom-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium hover:bg-white">
              ▶ Play trailer · 2:35
            </button>
          </div>
        </section>

        {/* Genres */}
        <section className="flex flex-wrap gap-3">
          {movieDetail?.genres?.map((g, index) => (
            <span
              key={index}
              className="px-4 py-[6px] border border-gray-300 rounded-full text-sm font-medium text-gray-800"
            >
              {g.name}
            </span>
          ))}
        </section>

        {/* Overview */}
        <section className="text-gray-700 text-[16px] leading-relaxed max-w-[1000px]">
          {movieDetail?.overview}
        </section>

        {/* Director / Writers / Stars */}
        <section className="space-y-1 text-[16px] leading-7 border-t border-gray-200 pt-4">
          <p>
            <span className="font-semibold text-[#09090B]">Director</span>{" "}
            {directorNames}
          </p>
          <p>
            <span className="font-semibold text-[#09090B]">Writers</span>{" "}
            {writerNames}
          </p>
          <p>
            <span className="font-semibold text-[#09090B]">Stars</span>{" "}
            {starNames}
          </p>
        </section>

        {/* More like this */}
        <section className="pt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[22px] font-semibold text-[#09090B]">
              More like this
            </h2>
            <button
              onClick={handleMoreButton}
              className="flex items-center gap-1 text-gray-600 hover:text-black text-[15px] font-medium"
            >
              See more →
            </button>
          </div>

          <div className="flex flex-row gap-6 overflow-x-auto pb-2">
            {moreLike.slice(0, 5).map((movie, index) => (
              <MovieCard
                key={index}
                movieId={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
