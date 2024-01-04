import PropTypes from "prop-types";
import { RenderImage } from "./Image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RenderItemCart } from "./Cart";


const RenderItemMain = ({ 
  item,
  setIsLoading 
}) => {
  const [itemInCart, setItemInCart] = useState([]);
  const cartInfo = useSelector(
    (state) => state.dataSlicePersisted.cartInfo,
  );

  useEffect(()=>{
    setItemInCart([]);
    if(cartInfo?.details)
      setItemInCart(cartInfo?.details.filter(det => det.itemNo === item.itemNo));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[item])
  return (
    <div className="bg-white w-full px-4 object-center overflow-y-auto pb-10">
      <RenderImage itemImage={item.defaultImageURL}/>
      {/* <RenderTag/> */}
      <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide whitespace-nowrap mt-2.5">
        {item.itemName}
      </div>
      <div className="text-gray-700  text-base font-bold leading-6 mt-1">
        {`$ ${item.retailPrice}`}
      </div>
      <RenderItemCart 
        itemInCart={itemInCart}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};
RenderItemMain.propTypes = {
  item: PropTypes.object,
  setIsLoading: PropTypes.func
};

export default RenderItemMain;