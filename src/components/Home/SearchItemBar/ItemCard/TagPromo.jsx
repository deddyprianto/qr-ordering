import { Trans } from "react-i18next";
import { IconPercentage } from "../../../../assets/svgIcon";

export const RenderTagPromo = () => {
  return (
    <div className="relative items-stretch bg-red-600 flex justify-between gap-1 mb-12 px-4 py-1  rounded-tl-xl rounded-br-xl">
      <IconPercentage/>
      <div className="text-white text-center text-xs font-medium leading-4 tracking-wide grow whitespace-nowrap self-start">
        <Trans i18nKey={"promo"}/>
      </div>
    </div>
  );
}