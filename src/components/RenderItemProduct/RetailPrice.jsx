import PropTypes from "prop-types"


export const RenderRetailPrice = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "18px",
        gap: "8px",
      }}
    >
      {(item?.isDiscounted || false) && (
        <div
          className="text-gray-700  text-base font-bold leading-6 mt-1 line-through"
          style={{
            color: "#9D9D9D",
            textDecorationLine: "strikethrough",
            whiteSpace: "nowrap"
          }}
        >
          $ {item?.retailPrice.toFixed(2)}
        </div>
      )}

      <div className="text-gray-700  text-base font-bold leading-6 mt-1"
        style={{color: item?.isDiscounted?"#CF3030":""}}
      >
        $ {item?.isDiscounted?item?.discountedPrice.toFixed(2):item?.retailPrice.toFixed(2)}
      </div>
    </div>
  )
}

RenderRetailPrice.propTypes = {
  item: PropTypes.any
}