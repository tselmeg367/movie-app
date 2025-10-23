import Star from "@/app/_icons/Star";
export const MoviePart = () => {
  return (
    <div className="">
      <div className="bg-[url('/zurag.jpg')] bg-cover bg-center w-[230px] h-[340px]"></div>{" "}
      <div className="flex flex-col p-[8px] items-start self-stretch w-[230px] h-[79px] rounded-lg bg-[#F4F4F5]">
        {" "}
        <div class="flex flex-row">
          <Star />

          <div class="flex items-baseline">
            <p class="text-[#09090B] font-inter text-[14px] font-medium leading-[20px]">
              6.9
            </p>
            <p class="text-[#71717A] font-inter text-[12px] font-normal leading-[16px]">
              /10
            </p>
          </div>
        </div>
        <p className="overflow-hidden text-ellipsis text-[#09090B] font-inter text-[18px] not-italic font-normal leading-[28px] whitespace-nowrap">
          Dear Santa
        </p>
      </div>
    </div>
  );
};
