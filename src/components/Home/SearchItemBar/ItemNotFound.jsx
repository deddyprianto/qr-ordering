import { Trans } from "react-i18next";

export const RenderItemNotFound = () => {
  return (
    <div className="justify-center items-stretch flex w-full flex-col px-4">
      <img
        alt={"itemNotFound"}
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
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