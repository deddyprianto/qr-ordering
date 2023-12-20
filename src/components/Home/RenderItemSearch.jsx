import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiProduct } from "../../services/Product";
import { setEnableSearchUsingScroll } from "../../app/dataSlicePersisted";
import Loader from "../Loader";

export const RenderItemSearch = ({ searchText="" }) => {
  const [searchItemList, setSearchItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchItemObj = useSelector(
    (state) => state.dataSlicePersisted.searchItemObj,
  );

  useEffect(() => {
    if(searchItemObj?.doSearch){
      handleSearchItems();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchItemObj]);

  const handleSearchItems = async() => {
    let params = {
      search: searchItemObj?.searchText,
      skip: searchItemObj?.isResetList?0:searchItemList.length,
      take: 10,
      sortBy: "buttonTitle",
      isDescending: false
    }
    try {
      setIsLoading(true);
      const result = await apiProduct('GET', "BUGIS/ALL", params);
      if(result.resultCode == 200){
        let newSearchItemList = [];
        if(searchItemObj?.isResetList) newSearchItemList = result.data;
        else newSearchItemList = searchItemList.concat(result.data)
        setSearchItemList(newSearchItemList);
        setEnableSearchUsingScroll(newSearchItemList.length>0);
      }
      else setSearchItemList([]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const renderItem = (item={}, id="") => {
    return(
      <div id={id} className="items-stretch self-stretch shadow-sm bg-white flex justify-between gap-0 mt-4 rounded-2xl">
        <div className="flex-col overflow-hidden relative flex aspect-square w-[150px] items-stretch pr-14 pb-12">
          <img
            alt="item image"
            loading="lazy"
            src={item?.defaultImageURL}
            className="absolute h-full w-full object-cover object-center inset-0 rounded-l-xl"
          />
          {/* Promo tag */}
          {/* <div className="relative items-stretch bg-red-600 flex justify-between gap-1 mb-12 px-4 py-1 rounded-tl-xl rounded-br-xl">
            <img
              alt="promo icon"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e3a893c1f4a669ad411c93006b60848059e6ba4cd483455208dd447efbc605?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
              className="aspect-square object-contain object-center w-[18px] overflow-hidden"
              
            />
            <div className="text-white text-center text-xs font-medium leading-4 tracking-wide grow whitespace-nowrap self-start">
              Promo
            </div>
          </div> */}
          {/* insight tag */}
          {/* <div className="relative items-stretch flex justify-between gap-1 mt-16">
            <div className="items-center bg-lime-700 flex aspect-[2.8076923076923075] flex-col justify-center pl-1 pr-12 py-1 rounded-[100px]">
              <img
                alt="Chef's Recomendation"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0271d4175bcbe9354d8b97e5f1623617c1f73da2ef180946a2ebd96d7d026452?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden"
              />
            </div>
            <div className="items-center bg-amber-500 flex aspect-[2.8076923076923075] flex-col justify-center pl-1 pr-12 py-1 rounded-[100px]">
              <img
                alt="Spicy"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13238e88d8532457614e4633cd608dda5918afb999981681e3ba44b8fc4196fb?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden"
              />
            </div>
            <div className="items-center bg-amber-500 flex aspect-[2.8076923076923075] flex-col justify-center pl-1 pr-12 py-1 rounded-[100px]">
              <img
                alt="Customer Favorite"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13238e88d8532457614e4633cd608dda5918afb999981681e3ba44b8fc4196fb?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden"
              />
            </div>
          </div>*/}
        </div> 
        <div className="justify-between items-stretch flex grow basis-[0%] flex-col p-2">
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            {item?.itemName}
          </div>
          <div className="items-stretch flex gap-2 mt-7">
            <div className="text-center text-base font-bold leading-6">
              $ {item?.retailPrice}
            </div>
            {/* If discount  */}
            {/* <div className="text-neutral-400 text-center text-base font-medium leading-6 line-through">
              {item?.retailPrice}
            </div>
            <div className="text-red-600 text-center text-base font-bold leading-6">
              $ 5.00
            </div> */}
          </div>
          <div className="items-stretch bg-pink-500 flex gap-2 mt-2 px-20 py-2 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8030d201dcaa893bb31b0473d2846f5bbcf5965490542a46eac20fb4789e563e?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-xs font-bold leading-4 self-center my-auto">
              Add
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const renderPerCategory = (cat, id) => {
    return(
      <div id={id}>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <b className="relative text-base leading-[140%] text-center">
            {cat.buttonTitle}
          </b>
          {cat?.productInfo?.lenght>0?
            cat?.productInfo?.map((item, idx) => {
              return renderItem(item, `${id}-${idx}`)
            })
            : renderItem(cat?.productInfo)
            }
        </div>
      </div>
    );
  };

  const renderItemList = () => {
    return(
      <div className="relative bg-text-color-secondary w-full h-[1509px] text-left text-sm text-text-color-primary font-med14 absolute z-10">
        <div  className="absolute left-[calc(50%_-_215px)] w-[430px] h-full flex flex-col items-start justify-start py-6 px-4 box-border gap-[24px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative tracking-[0.02em] leading-[140%] font-medium">{`Search result for `}</div>
            <b className="relative tracking-[0.02em] leading-[140%]">{searchText}</b>
          </div>
          {searchItemList?.map((cat, idx) => {
            return renderPerCategory(cat, idx)
          })}
        </div>
      </div>
    );
  }

  const renderItemNotFound = () => {
    return (
      <div className="justify-center items-stretch flex w-full flex-col px-4 py-12">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a62b33a1e5a6616109649c8324d8bafc77036b1627659f6b82c9c72ae2cbb262?apiKey=fb1a9cbe3d4146ecbf83898601353c5c&"
          className="aspect-square object-contain object-center w-[246px] overflow-hidden self-center max-w-full mt-40"
        />
        <div className="text-black text-center text-base font-bold self-center whitespace-nowrap mt-6">
          Item Not Found
        </div>
        <div className="text-black text-center text-sm font-medium mt-1 mb-28">
          {"We couldn't find the item you searched for."}
          <br />
          Please double-check your keyword.
        </div>
      </div>
    );
  }

  if(isLoading) return <Loader/>
  else if(searchItemList.length>0) return renderItemList();
  else return renderItemNotFound();
};

RenderItemSearch.propTypes = {
  itemList: PropTypes.bool,
  searchText: PropTypes.string,
};
