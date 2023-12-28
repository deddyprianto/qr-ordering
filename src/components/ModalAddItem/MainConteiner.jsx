import PropTypes from "prop-types";
import RenderItemMain from "./ItemMain";
import RenderItemAttributes from "./ItemAttributes";

const RenderMainContainer = ({ 
  item,
  typeOfModalAddItem,
  attList,
  setAttList,
  setItemToAdd
}) => {
  switch (typeOfModalAddItem.toLowerCase()) {
    case "main":
      return (
        <RenderItemMain 
          item={item} />
      );
    case "attribute":
      return (
        <RenderItemAttributes  
          attributes={item.attributes}
          attList={attList}
          setItemToAdd={setItemToAdd}
          setAttList={setAttList}
        />
      );
    default:
      return <div></div>;
  }
};
export default RenderMainContainer;

RenderMainContainer.propTypes = {
  typeOfModalAddItem: PropTypes.string,
  item: PropTypes.object,
  attList: PropTypes.array,
  setAttList: PropTypes.func,
  setItemToAdd: PropTypes.func
};