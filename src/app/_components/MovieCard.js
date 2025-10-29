import Star from "@/app/_icons/Star";

export const MovieCard = (movieData) => {
  const { title, rating, image } = movieData;

  return (
    <div className="">
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className={`bg-cover bg-center w-[230px] h-[340px]`}
      ></div>{" "}
      <div className="flex flex-col p-[8px] items-start self-stretch w-[230px] h-[79px] rounded-lg bg-[#F4F4F5]">
        {" "}
        <div className="flex flex-row">
          <Star />

          <div className="flex items-baseline">
            <p className="text-[#09090B] font-inter text-[14px] font-medium leading-[20px]">
              {rating}
            </p>
            <p className="text-[#71717A] font-inter text-[12px] font-normal leading-[16px]">
              /10
            </p>
          </div>
        </div>
        <p className="overflow-hidden w-[213px] text-ellipsis text-[#09090B] font-inter text-[18px] not-italic font-normal leading-[28px] whitespace-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
};
