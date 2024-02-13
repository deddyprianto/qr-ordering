import PropTypes from "prop-types";
import RenderItemMain from "./ItemMain";
import RenderItemAttributes from "./ItemAttributes";
import RenderItemBundles from "./ItemBundle";

const RenderMainContainer = ({ 
  item,
  typeOfModalAddItem,
  attList,
  bundleList,
  setBundleList,
  setAttList,
  setItemToAdd,
  setIsLoading
}) => {
  switch (typeOfModalAddItem.toLowerCase()) {
    case "main":
      return (
        <RenderItemMain 
          item={item} 
          setIsLoading={setIsLoading}
        />
      );
    case "bundle":
      return (
        <RenderItemBundles  
          bundles={item.bundles}
          bundleList={bundleList}
          setItemToAdd={setItemToAdd}
          setBundleList={setBundleList}
        />
      );
    case "attribute":
      return (
        <RenderItemAttributes  
          attributes={item.attributes}
          attList={attList}
          setAttList={setAttList}
        />
      );
    default:
      return null;
  }
};
export default RenderMainContainer;

RenderMainContainer.propTypes = {
  typeOfModalAddItem: PropTypes.string,
  item: PropTypes.object,
  attList: PropTypes.array,
  bundleList: PropTypes.array,
  setBundleList: PropTypes.func,
  setAttList: PropTypes.func,
  setItemToAdd: PropTypes.func,
  setIsLoading: PropTypes.func
};