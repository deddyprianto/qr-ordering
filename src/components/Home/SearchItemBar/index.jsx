import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { apiProduct } from "../../../services/Product";
import { setEnableSearchUsingScroll } from "../../../app/dataSlicePersisted";
import { RenderItemNotFound } from "./ItemNotFound";
import { RenderSearchResult } from "./SearchResult";
import Loader from "../../Loader";
import { SkeletonSearch } from "../../SkeletonSearch";

const RenderSearchItemBar = ({ searchText = "" }) => {
  const [searchItemList, setSearchItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLength, setDataLength] = useState(0);
  const searchItemObj = useSelector(
    (state) => state.dataSlicePersisted.searchItemObj,
  );

  const handleSearchItems = useRef();
  useEffect(() => {
    if (searchItemObj?.doSearch) {
      handleSearchItems.current();
    }
  }, [searchItemObj]);

  handleSearchItems.current = async () => {
    if (isLoading) return;
    if(searchItemObj.isResetList) setDataLength(0);
    if((dataLength == searchItemList.length) && !searchItemObj.isResetList) return;
    
    setIsLoading(true);
    

    let params = {
      search: searchItemObj?.searchText,
      skip: searchItemObj?.isResetList ? 0 : searchItemList.length,
      take: 10,
      sortBy: "buttonTitle",
      isDescending: false,
    };
    try {
      const result = await apiProduct("GET", "BUGIS/ALL", params);
      if (result.resultCode == 200) {
        let newSearchItemList = [];
        if (searchItemObj?.isResetList) newSearchItemList = result.data;
        else newSearchItemList = searchItemList.concat(result.data);
        setDataLength(result.dataLength);
        setSearchItemList(newSearchItemList);
        setEnableSearchUsingScroll(newSearchItemList.length > 0);
      } else setSearchItemList([]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  if(isLoading && searchItemObj?.isResetList) return <Loader/>
  else if (searchItemList.length > 0) {
    return (
      <>
        <RenderSearchResult 
          searchText={searchText} 
          searchItemList={searchItemList}
          isLoading={isLoading}/>;
          
        {isLoading && <SkeletonSearch />}
      </>
    ); 
  }
  else return <RenderItemNotFound/>;
};

RenderSearchItemBar.propTypes = {
  searchText: PropTypes.string,
};
export default RenderSearchItemBar