import { useEffect, useState } from "react";
import { NavbarMenu } from "./NavbarMenu";
import { Insights } from "../../components/Insights";
import { SubGroupMenu } from "./SubGroupMenu";
import {  useDispatch, useSelector } from "react-redux";
import "../../scss/animation.scss";
import { Skeleton } from "../../components/Skeleton";
import { GET } from "../../utilities/services";
import { ProductCatalog } from "./ProductCatalog";
import { Trans } from "react-i18next";
import { mapCartAndProduct } from "../../components/Home/productAndCartMapper";
import { setMenuSubGroup } from "../../app/dataSlice";
import { RenderSearchItemBar } from "../../components/Home/SearchItemBar";
import { setEnableSearchUsingScroll } from "../../app/dataSlicePersisted";

export const MainView = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [isSelectedItem, setIsSelectedItem] = useState("");
  const [dtCategoryLength, setDtCategoryLength] = useState(0);
  const [isFirstOpenSearchBar, setIsFirstOpenSearchBar] = useState(true);
  const theme = useSelector((state) => state.dataSlice.theme);
  const [isLoading, setIsLoading] = useState(true);
  const [highlights, setHighlights] = useState(true);
  const [selectedSubGroup, setSelectedSubGroup] = useState("");
  const [isHasSubGroup, setIsHasSubGroup] = useState([]);
  const dispatch = useDispatch();
  const { outletName, cartInfo, searchItemObj } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const { isSearchItem, menuSubGroup } = useSelector(
    (state) => state.dataSlice,
  );
  useEffect(() => {
    if (searchItemObj?.doSearch) {
      setIsFirstOpenSearchBar(false);
    }
  }, [searchItemObj]);

  useEffect(() => {
    if (!isSearchItem) {
      dispatch(setEnableSearchUsingScroll(false));
      setIsFirstOpenSearchBar(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchItem]);

  const fetchAllSubGroupItem = async (subGroup) => {
    for (const sb of subGroup) {
      sb.items = [];
      let dataLength = 1;

      while (sb.items.length < dataLength && dataLength !== 0) {
        let result = await getMenuItem(
          sb.buttonType,
          sb.refNo,
          sb.items.length,
        );
        dataLength = result.dataLength;
        let addMenu = mapCartAndProduct(result.tempItem, cartInfo);
        sb.items = sb.items.concat(addMenu);
      }
      dispatch(setMenuSubGroup([...subGroup]));
    }
  };

  const handleSelectGroup = async (type, refNo) => {
    setIsLoading(true);
    dispatch(setMenuSubGroup([]));
    let data = await getMenuItem(type, refNo);
    setIsHasSubGroup(data.tempSubGroup?.length > 0);
    if (data.tempSubGroup?.length > 0) {
      setSelectedSubGroup(data.tempSubGroup[0].refNo);
      fetchAllSubGroupItem(data.tempSubGroup);
    } else {
      let tempSubGroup = [
        {
          items: data.tempItem,
          buttonType: type,
          refNo: refNo,
        },
      ];
      dispatch(
        setMenuSubGroup([
          {
            refNo: "",
            items: data.tempItem,
          },
        ]),
      );
      fetchAllSubGroupItem(tempSubGroup);
    }
    setIsLoading(false);
  };

  const getMenuItem = (type, refNo, skip = 0, take = 5) => {
    let obj = {
      skip: skip,
      take: take,
    };

    return GET(`products/${outletName}/${type}/${refNo}`, obj).then((res) => {
      let tempSubGroup = [];
      let tempItem = [];
      let dataLength = res.dataLength;
      res.data.map((dt) => {
        if (dt.buttonType.toLowerCase() == "folder") {
          tempSubGroup.push(dt);
        } else if (dt.buttonType.toLowerCase() != "item") {
          tempSubGroup.push(dt);
        } else if (dt.buttonType.toLowerCase() == "item") {
          tempItem.push(dt);
        }
      });
      return { tempItem, tempSubGroup, dataLength };
    });
  };
  const renderMainView = () => {
    return (
      <div className="relative pb-20">
        <NavbarMenu
          dataCategory={dataCategory}
          isSelectedItem={isSelectedItem}
          dtCategoryLength={dtCategoryLength}
          setDataCategory={setDataCategory}
          setIsSelectedItem={setIsSelectedItem}
          setDtCategoryLength={setDtCategoryLength}
          handleSelectGroup={handleSelectGroup}
        />
        <div style={{ padding: "16px 16px 0px 16px" }}>
          {!isLoading && highlights && (
            <Insights
              title="Tag Insights"
              description="Explore tags as you navigate the menu. You might encounter these tags
                            anywhere in our menu."
              onClick={() => setHighlights(false)}
            />
          )}
          {isHasSubGroup && (
            <SubGroupMenu
              selectedSubGroup={selectedSubGroup}
              setSelectedSubGroup={setSelectedSubGroup}
            />
          )}
          {!isLoading && menuSubGroup.length >= 1 && (
            <p
              style={{
                fontWeight: "700",
                fontSize: "22px",
                marginTop: "16px",
                color: theme.textColor,
              }}
            >
              <Trans i18nKey={"you_may_like_this"} />
            </p>
          )}
          {isLoading ? <Skeleton /> : <ProductCatalog />}
        </div>
        {isSearchItem && (
          <div className="absolute inset-0 backdrop-filter backdrop-blur-lg z-0"></div>
        )}
      </div>
    );
  };

  if (isFirstOpenSearchBar) return renderMainView();
  else return <RenderSearchItemBar searchText={searchItemObj?.searchText} />;
};
