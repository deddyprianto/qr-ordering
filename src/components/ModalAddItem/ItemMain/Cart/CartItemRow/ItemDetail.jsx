import PropTypes from "prop-types"

export const RenderItemDetailInCart = ({name}) => {
  return (
    <ul className="m-0 font-inherit text-inherit pl-[10px] list-disc">
      <li>{name}</li>
    </ul>
  )
}
RenderItemDetailInCart.propTypes = {
  name: PropTypes.string
}