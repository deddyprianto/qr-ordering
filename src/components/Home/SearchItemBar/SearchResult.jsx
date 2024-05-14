import { lazy } from "react";
import { Trans } from "react-i18next";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

const RenderItemCard = lazy(() => import("./ItemCard"));

export const RenderSearchResult = ({ searchText, searchItemList }) => {
  const { menuSubGroup } = useSelector((state) => state.dataSlice);

  const groupingSearchItem = menuSubGroup
    .map(({ buttonTitle, items }) => {
      const matchedItems = items.filter(({ refNo }) => {
        return searchItemList.some(
          ({ refNo: data2RefNo }) => data2RefNo === refNo,
        );
      });
      return matchedItems.length > 0
        ? {
            buttonTitleGroups: buttonTitle,
            items: matchedItems,
          }
        : undefined;
    })
    .filter(Boolean);

  return (
    <div className="items-start flex w-full flex-col pt-6 px-4">
      <div className="items-stretch flex gap-2 self-start">
        <div
          id="searchLabel"
          className="text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap"
        >
          <Trans i18nKey={"search_result_for"} />
        </div>
        <div className="text-gray-700 text-sm font-bold leading-5 tracking-wide whitespace-nowrap">
          {searchText}
        </div>
      </div>
      {groupingSearchItem?.map((group) => (
        <div id="groupingSearchItem" key={group.refNo} className="w-full">
          <div
            id="nameGroupItemSearch"
            className="text-gray-700 text-lg font-bold leading-6 mt-6 mb-2"
          >
            {group.buttonTitleGroups}
          </div>

          {group.items?.map((cat, idx) => (
            <div key={cat.refNo} id={idx} className="w-full">
              {cat?.productInfo?.length > 0 ? (
                cat?.productInfo?.map((item) => (
                  <RenderItemCard item={item} key={item.refNo} />
                ))
              ) : (
                <RenderItemCard item={cat?.productInfo} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

RenderSearchResult.propTypes = {
  searchText: PropTypes.string,
  searchItemList: PropTypes.array,
};
