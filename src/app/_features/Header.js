import { Moon } from "../_icons/MoonIcon";
import MovieIcon from "../_icons/MovieIcon";
import HeaderIcon from "../_icons/headerIcon";
import { useRouter } from "next/navigation";
import { NavigationMenuDemo } from "./home/Genre";
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
        <div>
          <NavigationMenuDemo />
        </div>
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
