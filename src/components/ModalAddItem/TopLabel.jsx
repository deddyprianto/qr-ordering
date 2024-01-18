import PropTypes from "prop-types";
import { IconClose } from "../../assets/svgIcon";
import { RenderLabelAndPrice } from "./LabelAndPrice";

export const RenderTopLabel = ({ 
  itemName, 
  price, 
  setOpenModal, 
  typeOfModalAddItem 
}) => {
  return (
    <div
      className={`w-full bg-white flex ${
        typeOfModalAddItem.toLowerCase() != "main"
          ? "justify-between"
          : "justify-end"
      } items-center px-[16px]`}
    >
      {typeOfModalAddItem.toLowerCase() !== "main" && (
        <RenderLabelAndPrice itemName={itemName} price={price} />
      )}
      <button
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <IconClose color="black" width="30" height="50" />
      </button>
    </div>
  );
}

RenderTopLabel.propTypes = {
  itemName: PropTypes.string,
  price: PropTypes.number,
  setOpenModal: PropTypes.func,
  typeOfModalAddItem: PropTypes.string
}