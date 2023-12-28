import PropTypes from "prop-types";
import image3 from "../../assets/image3.png";


const RenderItemMain = ({ item }) => {
  return (
    <div className="bg-white w-full px-4 object-center overflow-y-auto pb-10">
      <div className="h-3/4 flex items-center justify-center">
        <img
          alt="itemImage"
          loading="lazy"
          src={item.defaultImageURL?item.defaultImageURL:image3}
          className="rounded-2xl object-cover object-center inset-0"
        />
      </div>
      {/* Tag Insight */}
      {/* <div className="items-stretch flex  gap-2.5 mt-[10px]">
        <div className="flex items-center bg-lime-700 justify-between gap-1 px-2 py-1 rounded-[100px]">
          <IconChef />
          <div className="text-white text-xs font-medium leading-4 tracking-wide">
            Chef’s Recommendation
          </div>
        </div>
        <div className="flex items-center bg-amber-500 justify-between gap-1 px-1.5 py-1 rounded-[100px]">
          <IconStar />
          <div className="text-white text-xs font-medium leading-4 tracking-wide grow whitespace-nowrap ">
            Customer Favorites
          </div>
        </div>
      </div> */}
      <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide whitespace-nowrap mt-2.5">
        {item.itemName}
      </div>
      <div className="text-gray-700  text-base font-bold leading-6 mt-2.5">
        {`$ ${item.retailPrice}`}
      </div>
    </div>
  );
};
RenderItemMain.propTypes = {
  item: PropTypes.object
};

export default RenderItemMain;