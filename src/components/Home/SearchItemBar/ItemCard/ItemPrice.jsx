import PropTypes from 'prop-types'

const renderItemPricePromo = (item) => {
  return (
    <div className="items-stretch flex gap-2 mt-7">
      <div className="text-neutral-400 text-center text-base font-medium leading-6 line-through">
        $ {item?.retailPrice}
      </div>
      <div className="text-red-600 text-center text-base font-bold leading-6">
        $ 5.00
      </div>
    </div>
  )
};

const renderItemPriceNormal = (item) => {
  return (
    <div className="text-gray-700 text-base font-bold leading-6 mt-7">
      {item?.retailPrice?`$ ${item?.retailPrice}`:"FREE"}
    </div>
    
  );
}

export const RenderItemPrice = ({isPromo, item}) => {
  if(isPromo) return renderItemPricePromo(item);
  else return renderItemPriceNormal(item)
}

RenderItemPrice.propTypes = {
  isPromo: PropTypes.bool,
  item: PropTypes.object
}