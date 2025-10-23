import RightIcon from "@/app/_icons/rightIcon";
import rightIcon from "@/app/_icons/rightIcon";
import { MoviePart } from "./MoviePart";
export const TopRated = () => {
  return (
    <div className=" pt-[54px] px-[80px] ">
      <div className="flex flex-row justify-center">
        <div className="flex w-[1277px] justify-between items-start">
          <p className="text-[#09090B] font-inter text-[24px] not-italic font-semibold leading-[32px] tracking-[-0.6px]">
            TopRated
          </p>
          <p className="flex h-[36px] px-4 py-2 justify-center items-center gap-2">
            See more <RightIcon />
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <MoviePart />
          <MoviePart />
          <MoviePart />
          <MoviePart />
          <MoviePart />
        </div>
        <div className="flex flex-row gap-8">
          <MoviePart />
          <MoviePart />
          <MoviePart />
          <MoviePart />
          <MoviePart />
        </div>
      </div>
    </div>
  );
};
