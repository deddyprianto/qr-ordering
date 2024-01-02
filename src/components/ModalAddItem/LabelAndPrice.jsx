import PropTypes from "prop-types";

export const RenderLabelAndPrice = ({ itemName, price }) => {
  return (
    <div>
      <div className="font-normal text-sm">{itemName}</div>
      <div className="font-bold text-[16px]">{`$ ${price}`}</div>
    </div>
  );
};

RenderLabelAndPrice.propTypes = {
  itemName: PropTypes.string,
  price: PropTypes.number
}