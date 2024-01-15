import { IconEdit, IconExpand, IconExpandHide } from "../../assets/svgIcon";
import PropTypes from "prop-types";
import { apiProduct } from "../../services/Product";
import { useSelector } from "react-redux";
import { useState } from "react";

export const RenderQty = ({
  isEmptyArray,
  expandItem,
  theme,
  setQuantity,
  quantity,
  setExpandItem,
  setOpenEditModal,
  setItemDataEdit,
  itemNo,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { outletName } = useSelector((state) => state.dataSlicePersisted);
  const handleEdit = async () => {
    const body = {
      itemNo,
    };
    try {
      setIsLoading(true);
      const result = await apiProduct("GET", `${outletName}/all`, body);
      setIsLoading(false);
      setItemDataEdit(result.data[0].productInfo);
      setOpenEditModal(true);
    } catch (error) {
      console.log(error);
    }
  };
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
            onClick={handleEdit}
            className={`text-[${theme.secondary}] text-sm font-medium leading-5 tracking-wide underline self-stretch grow whitespace-nowrap ml-1 cursor-pointer`}
          >
            {isLoading ? "Get your data..." : "Edit"}
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
RenderQty.propTypes = {
  isEmptyArray: PropTypes.bool,
  theme: PropTypes.string,
  setQuantity: PropTypes.func,
  quantity: PropTypes.number,
  setExpandItem: PropTypes.func,
  expandItem: PropTypes.bool,
  setOpenEditModal: PropTypes.func,
  setItemDataEdit: PropTypes.func,
  itemNo: PropTypes.string,
};
