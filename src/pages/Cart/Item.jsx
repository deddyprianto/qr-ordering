import { useSelector } from "react-redux";
import { IconEdit, IconExpand, IconExpandHide } from "../../assets/svgIcon";
import { useState } from "react";
import PropTypes from "prop-types";
import { hasEmptyElement } from "../../helper";

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [expandItem, setExpandItem] = useState(false);
  const theme = useSelector((state) => state.dataSlice.theme);
  const isEmptyArray =
    !hasEmptyElement(item?.attributes) || !hasEmptyElement(item?.bundles);

  const renderExpandDetail = () => {
    if (isEmptyArray) {
      return (
        <div
          className="px-[8px] py-1 scroll-containerExpand"
          style={{
            height:
              item?.attributes?.length > 1 || item?.bundles?.length > 1
                ? expandItem
                  ? "100px"
                  : "0px"
                : expandItem
                  ? "30px"
                  : "0px",
            transition: "height 0.5s ease-out",
          }}
        >
          {!hasEmptyElement(item?.attributes) &&
            item?.attributes?.map((attribute) => (
              <div
                style={{ color: theme.disableColor }}
                key={attribute?.uniqueID}
                className="grid grid-cols-[22px_1fr_50px] grid-rows-[1fr] auto-cols-[1fr] gap-[0px_0px] grid-flow-row font-medium text-[12px]"
              >
                <div>({attribute?.quantity}x)</div>
                <div>{attribute?.attName}</div>
                <div className="justify-self-end">
                  + $ {attribute?.unitPrice}
                </div>
              </div>
            ))}

          {!hasEmptyElement(item?.bundles) &&
            item?.bundles?.map((attribute) => (
              <div
                style={{ color: theme.disableColor }}
                key={attribute?.uniqueID}
                className="grid grid-cols-[22px_1fr_50px] grid-rows-[1fr] auto-cols-[1fr] gap-[0px_0px] grid-flow-row font-medium text-[12px]"
              >
                <div>({attribute?.quantity}x)</div>
                <div>{attribute?.bundleName}</div>
                <div className="justify-self-end">
                  + $ {attribute?.unitPrice}
                </div>
              </div>
            ))}
        </div>
      );
    } else {
      return null;
    }
  };

  const renderQty = () => {
    return (
      <div className="justify-between items-center border-t-[color:var(--Grey-Scale-color-Grey-Scale-3,#D6D6D6)] flex border-t border-solid py-2 px-2">
        <div className="items-stretch flex justify-between my-auto">
          {!isEmptyArray && (
            <div
              onClick={() => setExpandItem(!expandItem)}
              className="items-center flex justify-between gap-1"
            >
              {expandItem ? (
                <IconExpandHide primary={theme.secondary} />
              ) : (
                <IconExpand primary={theme.secondary} />
              )}

              <div
                className={`text-[${theme.secondary}] text-sm font-medium leading-5 tracking-wide underline self-stretch grow whitespace-nowrap`}
              >
                {expandItem ? "Hide" : "Expand"} Details
              </div>
            </div>
          )}

          <div
            className={`items-center flex justify-between ${
              !isEmptyArray && "ml-[8px]"
            }`}
          >
            <IconEdit primary={theme.secondary} />
            <div
              className={`text-[${theme.secondary}] text-sm font-medium leading-5 tracking-wide underline self-stretch grow whitespace-nowrap ml-1`}
            >
              Edit
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="flex gap-1 ">
          <div
            onClick={() => setQuantity((prev) => --prev)}
            className={`justify-center items-center flex flex-col w-9 h-9 px-2 rounded-lg text-white ${
              quantity <= 1
                ? `cursor-not-allowed bg-[${theme.disableColor}] pointer-events-none`
                : `bg-[${theme.secondary}]`
            }`}
          >
            -
          </div>
          <div className="flex text-gray-700 text-center text-base font-bold justify-center items-center bg-zinc-300  px-6 rounded-lg">
            <div>{quantity}</div>
          </div>
          <div
            onClick={() => setQuantity((prev) => ++prev)}
            className={`justify-center items-center bg-[${theme.secondary}] flex flex-col w-9 h-9 px-2 rounded-lg text-white`}
          >
            +
          </div>
        </div>
      </div>
    );
  };

  const renderNameLabel = () => {
    return (
      <div className="flex justify-between gap-4 py-2 items-start px-[8px]">
        <div>{item?.productInfo?.itemName}</div>
        <div className="w-[45px] text-center">
          $ {item?.productInfo?.retailPrice.toFixed(2)}
        </div>
      </div>
    );
  };

  return (
    <div className="items-stretch self-stretch border border-[#D6D6D6] flex w-full flex-col rounded-lg border-solid mt-[16px]">
      {renderNameLabel()}
      {renderExpandDetail()}
      {renderQty()}
    </div>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.object,
};
