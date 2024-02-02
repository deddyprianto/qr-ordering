import { Trans } from "react-i18next";
import { PropTypes } from "prop-types"
import { RenderItemCard } from "./ItemCard";

export const RenderSearchResult = ({ searchText, searchItemList }) => {
  return (
    <div className="items-start flex w-full flex-col pt-6 px-4">
      <div className="items-stretch flex gap-2 self-start">
        <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
          <Trans i18nKey={"search_result_for"} />{" "}
        </div>
        <div className="text-gray-700 text-sm font-bold leading-5 tracking-wide whitespace-nowrap">
          {searchText}
        </div>
      </div>
      {searchItemList?.map((cat, idx) => (
        <div key={cat.refNo} id={idx} className="w-full">
          <div className="text-gray-700 text-base font-bold leading-6 self-stretch mt-6">
            {cat.buttonTitle}
          </div>
          {cat?.productInfo?.length > 0 ? (
            cat?.productInfo?.map((item) => {
              return <RenderItemCard item={item} key={item.refNo} />;
            })
          ) : (
            <RenderItemCard item={cat?.productInfo} />
          )}
        </div>
      ))}
    </div>
  );
};

RenderSearchResult.propTypes = {
  searchText: PropTypes.string,
  searchItemList: PropTypes.array
}