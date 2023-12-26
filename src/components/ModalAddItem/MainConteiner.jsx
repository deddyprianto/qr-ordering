import PropTypes from "prop-types";
import RenderItemMain from "./ItemMain";

const RenderMainContainer = ({ 
  item,
  typeOfModalAddItem,
  setOpenModal, 
  setTypeOfModalAddItem
}) => {
  switch (typeOfModalAddItem.toLowerCase()) {
    case "main":
      return (
        <RenderItemMain 
          item={item}
          setOpenModal={setOpenModal}
          setTypeOfModalAddItem={setTypeOfModalAddItem} />
      );
    case "attribute":
      return (
        <RenderItemMain  />
      );
    default:
      return <div></div>;
  }
};
export default RenderMainContainer;

RenderMainContainer.propTypes = {
  setOpenModal: PropTypes.func,
  typeOfModalAddItem: PropTypes.string,
  setTypeOfModalAddItem: PropTypes.func,
  item: PropTypes.object
};