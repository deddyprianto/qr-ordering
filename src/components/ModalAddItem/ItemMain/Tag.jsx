
import { IconChef, IconStar } from "../../../assets/svgIcon";

export const RenderTag = () => {
  return( 
    <div className="items-stretch flex  gap-2.5 mt-[10px]">
      <div className="flex items-center bg-lime-700 justify-between gap-1 px-2 py-1 rounded-[100px]">
          <IconChef />
          <div className="text-white text-xs font-medium leading-4 tracking-wide">
          Chef’s Recommendation
          </div>
      </div>
      <div className="flex items-center bg-amber-500 justify-between gap-1 px-1.5 py-1 rounded-[100px]">
          <IconStar />
          <div className="text-white text-xs font-medium leading-4 tracking-wide grow whitespace-nowrap ">
          Customer Favorites
          </div>
      </div>
    </div>
  );
}
