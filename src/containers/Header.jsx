import { IconArrowLeft, IconTable, SearchIcon } from "../assets/svgIcon";
import "react-modern-drawer/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchItemObj,
  setEnableSearchUsingScroll,
} from "../app/dataSlicePersisted";
import { setIsSearchItem } from "../app/dataSlice";
import { Trans } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageOptimization } from "../components/ImageOptimization";

export default function Header() {
  const navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();
  const { isSearchItem } = useSelector((state) => state.dataSlice);
  const { enableSearchUsingScroll, searchItemObj, orderType, theme } =
    useSelector((state) => state.dataSlicePersisted);
  const dispatchIsSearchItem = (val) => {
    dispatch(setIsSearchItem(val));
  };

  const openSearchBar = () => {
    if (isSearchItem) {
      let tempSearchItemObj = JSON.parse(JSON.stringify(searchItemObj));
      if (enableSearchUsingScroll) {
        let inputElement = document.getElementById("input-search");
        tempSearchItemObj.searchText = inputElement.value;
        tempSearchItemObj.isResetList = true;
      }

      tempSearchItemObj.doSearch = true;
      dispatch(setSearchItemObj(tempSearchItemObj));
      dispatch(setEnableSearchUsingScroll(true));
    } else {
      dispatch(
        setSearchItemObj({
          doSearch: false,
          searchText: "",
          isResetList: true,
        }),
      );
      dispatchIsSearchItem(true);
      setTimeout(() => {
        let inputElement = document.getElementById("input-search");
        if (inputElement) {
          inputElement.focus();
        }
      }, 50);
    }
  };

  const renderLabelTableNo = () => {
    return (
      <div
        style={{
          backgroundColor: theme.Color_Primary,
        }}
        className="justify-center items-center border-b-[color:var(--Grey-Scale-color-Grey-Scale-4,#F9F9F9)] flex w-full flex-col border-b border-solid"
      >
        <div className="flex items-stretch gap-2 my-1">
          <IconTable />
          <div className="text-white text-center text-sm font-medium leading-5 tracking-wide my-auto">
            <Trans i18nKey={"you_at_table"} />
          </div>
          <div className="text-white text-center text-sm font-medium leading-5 tracking-wide self-center whitespace-nowrap my-auto">
            {"{table_no}"}
          </div>
        </div>
      </div>
    );
  };

  const renderConditionally = () => {
    if (isSearchItem) {
      return (
        <div className="flex w-full">
          <button
            className="ml-[-22px]"
            onClick={() => dispatchIsSearchItem(false)}
          >
            <IconArrowLeft />
          </button>
          <div className="text-zinc-500 text-sm font-medium leading-5 tracking-wide whitespace-nowrap border border-[color:var(--Text-color-Tertiary,#888787)] shadow-sm bg-white grow justify-center rounded-lg border-solid items-start">
            <input
              id="input-search"
              placeholder="Search Anything..."
              className="outline-none w-full h-full px-4 rounded-lg"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  openSearchBar();
                }
              }}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <ImageOptimization
            imageItems={theme?.Image_Logo}
            customStyle={{
              borderRadius: "100%",
            }}
            width={43}
          />
          <div className="text-stone-50 text-sm font-medium leading-5 tracking-wide self-stretch">
            {"{outlet_name}"}
          </div>
        </div>
      );
    }
  };

  const headerWithNavigation = (redirectPath, transKey) => {
    return (
      <button
        style={{ backgroundColor: theme.Color_Primary }}
        onClick={() => {
          navigate(redirectPath);
        }}
        className="flex text-white items-center text-[16px] font-medium py-[5px] w-full"
      >
        <IconArrowLeft />
        <div>
          <Trans i18nKey={transKey} />
        </div>
      </button>
    );
  };

  const renderMainHeader = () => {
    switch (location.pathname?.toLocaleLowerCase()) {
      case "/cart":
        return headerWithNavigation("/", "order_cart");
      case "/payment":
        return headerWithNavigation("/cart", "order_payment");
      case "/order":
        return headerWithNavigation("/", "order");
      case "/ordersummary":
        return headerWithNavigation("/order", "order_summary");
      default:
        return (
          <div
            style={{
              backgroundColor: theme.Color_Primary,
            }}
            className="justify-between items-center flex w-full gap-5 px-4 py-1"
          >
            {renderConditionally()}
            <button
              onClick={() => openSearchBar()}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  openSearchBar();
                }
              }}
              style={{
                backgroundColor: theme.Color_Secondary,
              }}
              className="justify-center items-center flex aspect-square flex-col w-[46px] h-[46px] px-3 rounded-[1000px]"
            >
              <SearchIcon />
            </button>
          </div>
        );
    }
  };

  const renderMain = () => {
    if (orderType == "" && location.pathname?.toLocaleLowerCase() == "/")
      return <div></div>;
    else
      return (
        <div>
          {renderLabelTableNo()}
          {renderMainHeader()}
        </div>
      );
  };

  return <>{renderMain()}</>;
}
