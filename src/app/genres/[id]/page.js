"use client";
import { Badge } from "@/components/ui/badge";
import MiniRightIcon from "@/app/_icons/MiniRightIcon";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { router } from "lucide-react";
import { useRouter } from "next/navigation";
import { Header } from "@/app/_features/Header";
import { MovieCard } from "@/app/_components/MovieCard";
import { NavigationMenuDemo } from "@/app/_features/home/Genre";
const BASE_URl = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";
export default function Page() {
  const { id } = useParams();
  const [genreData, setGenreData] = useState([]);
  const [genres, setGenres] = useState([]);
  const router = useRouter();
  const getData = async () => {
    const genreList = `${BASE_URl}/discover/movie?language=en&with_genres=${id}&page=1`;
    const response = await fetch(genreList, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    //    setGenresName(data.)
    setGenreData(data.results);
  };
  const getGenres = async () => {
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
  const handleMoreButton = (id) => {
    router.push(`/genres/${id}`);
  };
  console.log(genres);
  useEffect(() => {
    getData();
    getGenres();
  }, []);

  const genreDetail = genres?.filter((genre) => genre.id == id)[0];
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-[32px] p-[80px]">
        <div className="text-[var(--text-text-foreground,#09090B)] font-inter text-[30px] font-semibold leading-9 tracking-[-0.75px] not-italic">
          Search filter
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="text-[var(--text-text-foreground,#09090B)] font-inter w-[213px] h-[32px] text-2xl font-semibold leading-8 tracking-[-0.6px] not-italic">
                Genres
              </div>
              <div className="text-[var(--text-text-foreground,#09090B)] font-inter text-base font-normal leading-6 not-italic">
                See lists of movies by genre
              </div>
            </div>
            <div className="flex flex-wrap flex-row gap-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {genres.map((genre, index, id) => (
                <Badge
                  className="flex bg-white flex-wrap  border border-[var(--border-border-border,#E4E4E7)]  items-start content-start gap-x-[var(--spacing-4,16px)] gap-y-[16px] self-stretch text-[var(--text-text-foreground,#09090B)] font-inter text-xs font-semibold leading-4 not-italic"
                  key={index}
                  id={genre.id}
                  onClick={() => handleMoreButton(genre.id)}
                >
                  {genre.name} <MiniRightIcon />
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[var(--text-text-foreground,#09090B)] font-inter text-2xl font-semibold leading-7 tracking-[-0.5px] not-italic">
              81 titles in “{genreDetail?.name}”
            </div>

            <div className="flex flex-row gap-12 flex-wrap w-[1076px]">
              {genreData.slice(0, 12).map((data, index) => (
                <MovieCard
                  key={index}
                  movieId={data.id}
                  title={data.title}
                  rating={data.vote_average}
                  image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
