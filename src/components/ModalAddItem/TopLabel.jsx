import PropTypes from "prop-types";
import { IconClose } from "../../assets/svgIcon";
import {  useSelector } from "react-redux";
import { RenderLabelAndPrice } from "./LabelAndPrice";

export const RenderTopLabel = ({ itemName, price, setOpenModal }) => {
  const itemDetailModal = useSelector(
    (state) => state.dataSlice.itemDetailModal,
  );

  return(
    <div
      className={`w-full bg-white flex ${
        itemDetailModal ? "justify-between" : "justify-end"
      } items-center px-[16px]`}
    >
      {itemDetailModal && <RenderLabelAndPrice itemName={itemName} price={price}/>}
      <button
        onClick={() => {
          setOpenModal(false);
        }}
      >
          <IconClose color="black" width="30" height="50"/>
      </button>
    </div>
  );
}

RenderTopLabel.propTypes = {
  itemName: PropTypes.string,
  price: PropTypes.number,
  setOpenModal: PropTypes.func
}