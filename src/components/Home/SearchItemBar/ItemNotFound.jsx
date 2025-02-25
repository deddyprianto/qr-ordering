import { Trans } from "react-i18next";
import image from "../../../assets/search.png"

export const RenderItemNotFound = () => {
  return (
    <div className="justify-center items-stretch flex w-full flex-col px-4">
      <img
        alt={"itemNotFound"}
        loading="lazy"
        src={image}
        className="aspect-square object-contain object-center w-[246px] overflow-hidden self-center max-w-full mt-40"
      />
      <div className="text-black text-center text-base font-bold self-center whitespace-nowrap mt-6">
        <Trans i18nKey={"item_not_found"}/>
      </div>
      <div className="text-black text-center text-sm font-medium mt-1 mb-28">
        <Trans i18nKey={"couldn_find_item_search"}/>
        {""}
        <br />
        <Trans i18nKey={"please_double_check_keyword"}/>
      </div>
    </div>
  );
};