import { GreyCard } from "./GreyCard";
export const BigCards = () => {
  return (
    <div>
      <div className="flex flex-row justify-between w-[1227px] pt-[56px]">
        <div className="w-[251px] h-[32px] rounded-full bg-[#F4F4F5]"></div>
        <div className="w-[166px] h-[36px] rounded-[18px] bg-[#F4F4F5]"></div>
      </div>
      <div className="flex flex-col gap-[32px] pt-[32px]">
        <div className="flex flex-row gap-[32px]">
          <GreyCard />
          <GreyCard />
          <GreyCard />
          <GreyCard />
          <GreyCard />
        </div>
        <div className="flex flex-row gap-[32px]">
          <GreyCard />
          <GreyCard />
          <GreyCard />
          <GreyCard />
          <GreyCard />
        </div>
      </div>
    </div>
  );
};
