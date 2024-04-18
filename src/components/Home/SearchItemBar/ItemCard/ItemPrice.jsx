import PropTypes from 'prop-types'

const renderItemPricePromo = (item, styleMargin) => {
  return (
    <div className={`items-stretch flex gap-2 ${styleMargin || "mt-7"}`}>
      <div className="text-[#9D9D9D] text-center text-base font-medium leading-6 line-through">
        $ {item?.retailPrice}
      </div>
      <div className="text-red-600 text-center text-base font-bold leading-6">
        $ 5.00
      </div>
    </div>
  );
};

const renderItemPriceNormal = (item, styleMargin) => {
  return (
    <div
      className={`text-gray-700 text-base font-bold leading-6 ${
        styleMargin || "mt-7"
      }`}
    >
      {item?.retailPrice ? `$ ${item?.retailPrice}` : "FREE"}
    </div>
  );
};

export const RenderItemPrice = ({ isPromo, item, styleMargin }) => {
  if (isPromo) return renderItemPricePromo(item, styleMargin);
  else return renderItemPriceNormal(item, styleMargin);
};

RenderItemPrice.propTypes = {
  isPromo: PropTypes.bool,
  item: PropTypes.object,
  styleMargin: PropTypes.string,
};