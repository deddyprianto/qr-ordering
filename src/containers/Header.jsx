import {
  IconArrowLeft,
  IconTable,
  LogoIcon,
  SearchIcon,
} from "../assets/svgIcon";
import { useLocation } from "react-router-dom";
import "react-modern-drawer/dist/index.css";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setIsSearchItem, setSearchItemObj, setEnableSearchUsingScroll } from "../app/dataSlicePersisted";


export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  const dispatch = useDispatch();
  const isSearchItem = useSelector(
    (state) => state.dataSlicePersisted.isSearchItem,
  );
  const enableSearchUsingScroll = useSelector(
    (state) => state.dataSlicePersisted.enableSearchUsingScroll,
  );
  const searchItemObj = useSelector(
    (state) => state.dataSlicePersisted.searchItemObj,
  );
  const dispatchIsSearchItem = (val) => {
    dispatch(setIsSearchItem(val))
  };

  const openSearchBar = () => {
    if(isSearchItem){ 
      var tempSearchItemObj = JSON.parse(JSON.stringify(searchItemObj));
      if(enableSearchUsingScroll){
        var inputElement = document.getElementById('input-search');
        tempSearchItemObj.searchText = inputElement.value;
        tempSearchItemObj.isResetList = true;
      }

      tempSearchItemObj.doSearch = true;
      dispatch(setSearchItemObj(tempSearchItemObj));
      dispatch(setEnableSearchUsingScroll(true));
    }
    else {
      dispatch(setSearchItemObj({
        doSearch: false,
        searchText: "",
        isResetList: true
      }));
      dispatchIsSearchItem(true);
      setTimeout(() => {
        var inputElement = document.getElementById('input-search');
        if (inputElement) {
          inputElement.focus();
        }
      }, 50);
    }
  };

  const renderLabelTableNo = () => {
    return (
      <div className="justify-center items-center border-b-[color:var(--Grey-Scale-color-Grey-Scale-4,#F9F9F9)] bg-[#00524C] flex w-full flex-col px-16 border-b border-solid">
        <div className="flex items-stretch gap-2 my-1">
          <IconTable />
          <div className="text-white text-center text-sm font-medium leading-5 tracking-wide my-auto">
            You are at table
          </div>
          <div className="text-white text-center text-sm font-medium leading-5 tracking-wide self-center whitespace-nowrap my-auto">
            999
          </div>
        </div>
      </div>
    );
  };

  const renderConditionally = () => {
    if (isSearchItem) {
      return (
        <div className="flex w-full">
          <div
            className="ml-[-22px]"
            onClick={() => dispatchIsSearchItem(false)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                dispatchIsSearchItem(false);
              }
            }}
          >
            <IconArrowLeft />
          </div>
          <div className="text-zinc-500 text-sm font-medium leading-5 tracking-wide whitespace-nowrap border border-[color:var(--Text-color-Tertiary,#888787)] shadow-sm bg-white grow justify-center rounded-lg border-solid items-start">
            <input id="input-search"
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
        <div className="flex grow basis-[0%] flex-col items-start">
          <img loading="lazy" src={logo} width={43} height={24} />
          <div className="text-stone-50 text-sm font-medium leading-5 tracking-wide self-stretch">
            Fusionopolis
          </div>
        </div>
      );
    }
  };

  const renderMainHeader = () => {
    return (
      <div className="justify-between items-stretch border-b-[color:var(--Grey-Scale-color-Grey-Scale-4,#F9F9F9)] bg-[#00524C] flex w-full gap-5 px-4 py-2.5 border-b border-solid">
        {renderConditionally()}
        <div
          onClick={() => openSearchBar()}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              openSearchBar();
            }
          }}
          className="justify-center items-center bg-[#FF4782] flex aspect-square flex-col w-[46px] h-[46px] px-3 rounded-[1000px]"
        >
          <SearchIcon />
        </div>
      </div>
    );
  };

  const renderMain = () => {
    if (pathname === "/auth" || pathname === "/otp") {
      return (
        <div
          style={{
            padding: "16px",
          }}
        >
          <LogoIcon />
          <p>[store location]</p>
        </div>
      );
    } else {
      return (
        <div>
          {renderLabelTableNo()}
          {renderMainHeader()}
        </div>
      );
    }
  };

  return <>{renderMain()}</>;
}
