import PropTypes from "prop-types"
import { IconClose } from "../assets/svgIcon";
import { Tumbs } from "./Tumbs";
import { useSelector } from "react-redux";

export const Insights = ({onClick, title, description }) => {
  const { theme } = useSelector((state) => state.dataSlicePersisted);

    return (
      <div className="bg-orange-100 flex max-w-[398px] flex-col pb-2 px-2 rounded-2xl mt-6">
        <div className="flex w-full justify-between gap-5 mt-1.5 items-start">
          <div className="items-stretch flex gap-1">
            <img
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/14f562e35fb290deedd2e1894727d725e021330e099e319a33268d4b786041f2?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-700 text-sm font-bold leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
              {title}
            </div>
          </div>
          <button
            style={{
              backgroundColor: theme.Color_Secondary,
            }}
            onClick={() => onClick()}
            className="justify-center items-center bg-[black] self-stretch flex aspect-square flex-col w-7 h-7 px-1 rounded-[1000px]"
          >
            <IconClose />
          </button>
        </div>
        <div className="text-gray-700 text-xs font-medium leading-4 tracking-wide">
          {description}
        </div>
        <div className="flex flex-wrap mt-2 gap-2">
          <Tumbs
            bgColor="bg-lime-700"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0271d4175bcbe9354d8b97e5f1623617c1f73da2ef180946a2ebd96d7d026452?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
            label="Chef’s Recommendation"
          />

          <Tumbs
            bgColor="bg-red-600"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/551ae8011c7dbd3b38d06852e761d994a329f0996c28433dc20bd955cbd76657?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
            label="Spicy!"
          />

          <Tumbs
            bgColor="bg-amber-500"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ac0717d6088c9ce3e26db410d23f6abe1f30171654953eb76260706605014c?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
            label="Customer Favorites"
          />
        </div>
      </div>
    );
  };

  Insights.propTypes = {
    onClick : PropTypes.func,
    title : PropTypes.string,
    description : PropTypes.string
  }