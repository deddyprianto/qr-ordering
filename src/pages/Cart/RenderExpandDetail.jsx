import PropTypes from "prop-types";
import { hasEmptyElement } from "../../helper";

export const RenderExpandDetail = ({ item, expandItem, isEmptyArray }) => {
  let heightCustom;

  if (item?.attributes?.length > 1 || item?.bundles?.length > 1) {
    heightCustom = expandItem ? "100px" : "0px";
  } else {
    heightCustom = expandItem ? "30px" : "0px";
  }

  if (!isEmptyArray) {
    return (
      <div
        className="px-[8px] py-1 scroll-containerExpand"
        style={{
          height: heightCustom,
          transition: "height 0.5s ease-out",
        }}
      >
        {!hasEmptyElement(item?.attributes) &&
          item?.attributes?.map((attribute) => (
            <div
              style={{ color: "#9D9D9D" }}
              key={attribute?.uniqueID}
              className="grid grid-cols-[22px_1fr_50px] grid-rows-[1fr] auto-cols-[1fr] gap-[0px_0px] grid-flow-row font-medium text-[12px]"
            >
              <div>({attribute?.quantity}x)</div>
              <div>{attribute?.attName}</div>
              <div className="justify-self-end">+ $ {attribute?.unitPrice}</div>
            </div>
          ))}

        {!hasEmptyElement(item?.bundles) &&
          item?.bundles?.map((attribute) => (
            <div
              style={{ color: "#9D9D9D" }}
              key={attribute?.uniqueID}
              className="grid grid-cols-[22px_1fr_50px] grid-rows-[1fr] auto-cols-[1fr] gap-[0px_0px] grid-flow-row font-medium text-[12px]"
            >
              <div>({attribute?.quantity}x)</div>
              <div>{attribute?.bundleName}</div>
              <div className="justify-self-end">+ $ {attribute?.unitPrice}</div>
            </div>
          ))}
      </div>
    );
  } else {
    return null;
  }
};

RenderExpandDetail.propTypes = {
  item: PropTypes.object,
  expandItem: PropTypes.bool,
  isEmptyArray: PropTypes.bool,
};
