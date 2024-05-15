import PropTypes from "prop-types";
import { IconClose } from "../../assets/svgIcon";
import { RenderLabelAndPrice } from "./LabelAndPrice";

export const RenderTopLabel = ({
  itemName,
  price,
  setOpenModal,
  typeOfModalAddItem,
  item,
}) => {
  return (
    <div
      className={`w-full bg-white flex ${
        typeOfModalAddItem.toLowerCase() != "main"
          ? "justify-between"
          : "justify-end"
      } items-center px-[16px] mt-[16px]`}
    >
      {typeOfModalAddItem.toLowerCase() !== "main" && (
        <RenderLabelAndPrice item={item} itemName={itemName} price={price} />
      )}
      <button
        id="iconCloseAction"
        onClick={() => {
          setOpenModal(false);
        }}
        style={{ marginTop: "-20px" }}
      >
        <IconClose color="black" width="30" height="50" />
      </button>
    </div>
  );
};

RenderTopLabel.propTypes = {
  itemName: PropTypes.string,
  price: PropTypes.number,
  setOpenModal: PropTypes.func,
  item: PropTypes.object,
  typeOfModalAddItem: PropTypes.string,
};