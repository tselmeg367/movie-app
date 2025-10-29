import { Moon } from "../_icons/MoonIcon";
import MovieIcon from "../_icons/MovieIcon";
import HeaderIcon from "../_icons/headerIcon";
export const Header = () => {
  return (
    <div className=" p-[16px] flex justify-between w-full flex-row">
      <div className="flex flex-row">
        {" "}
        <MovieIcon />{" "}
        <p className="text-indigo-700 font-inter text-[16px] italic font-bold leading-[20px] tracking-[0.32px]">
          Movie Z
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-md border border-[#E4E4E7] bg-white shadow-sm flex w-[97px] h-[36px] px-4 py-2 justify-center items-center gap-2">
          <HeaderIcon />
          Genre
        </button>
        <input
          className="flex w-[379px] h-[36px] px-3 items-center gap-[10px] rounded-lg border border-[#E4E4E7] bg-white"
          placeholder="Search"
        />
      </div>
      <div>
        <Moon />
      </div>
    </div>
  );
};
// git add .
// git commit
