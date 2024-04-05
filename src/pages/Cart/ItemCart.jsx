import { useSelector } from "react-redux";
import { lazy, useState } from "react";
import PropTypes from "prop-types";
import { hasEmptyElement } from "../../helper";
import { RenderExpandDetail } from "./RenderExpandDetail";
import { getItemType } from "../../components/RenderItemProduct/GetItemType";
import { numberFormatter } from "../../utilities/numberFormatter";
import { IconPercentage } from "../../assets/svgIcon";
import { Trans } from "react-i18next";

const RenderQty = lazy(() => import("./RenderQty"));
const RenderModalItemDetail = lazy(
  () => import("../../components/ModalAddItem"),
);

const ItemCart = ({ item, idCart, setIsCartEmpty, totalQuantityCart }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [expandItem, setExpandItem] = useState(false);
  const theme = useSelector((state) => state.dataSlicePersisted.theme);
  const [itemDataEdit, setItemDataEdit] = useState([]);
  const isEmptyArray =
    hasEmptyElement(item?.attributes) && hasEmptyElement(item?.bundles);

  const tagPromoElement = () => {
    return (
      <div className="relative items-stretch bg-red-600 flex justify-between gap-1 px-4 py-1 rounded-tl-lg rounded-br-xl w-[28%]">
        <IconPercentage />
        <div className="text-white text-center text-xs font-medium leading-4 tracking-wide grow whitespace-nowrap self-start">
          <Trans i18nKey={"promo"} />
        </div>
      </div>
    );
  };

  return (
    <div className="items-stretch self-stretch border border-[#D6D6D6] flex w-full flex-col rounded-lg border-solid mt-[16px]">
      {item?.discount > 0 && tagPromoElement()}
      <div className="flex justify-between gap-4 py-2 items-start px-[8px]">
        <div>{item?.productInfo?.itemName}</div>
        <div className="text-center flex">
          {item?.discount > 0 && (
            <div
              className="text-gray-700  text-base font-bold leading-6 line-through mr-[8px]"
              style={{
                color: "#9D9D9D",
                textDecorationLine: "strikethrough",
                whiteSpace: "nowrap",
              }}
            >
              $ {numberFormatter(item?.grossSales)}
            </div>
          )}

          <div
            className="text-gray-700  text-base font-bold leading-6"
            style={{ color: item?.discount > 0 ? "#CF3030" : "" }}
          >
            $ {numberFormatter(item?.amount)}
          </div>
        </div>
      </div>
      <RenderExpandDetail
        expandItem={expandItem}
        isEmptyArray={isEmptyArray}
        item={item}
        theme={theme}
      />
      <RenderQty
        totalQuantityCart={totalQuantityCart}
        itemNo={item.itemNo}
        setItemDataEdit={setItemDataEdit}
        expandItem={expandItem}
        item={item}
        idCart={idCart}
        setExpandItem={setExpandItem}
        theme={theme}
        isEmptyArray={isEmptyArray}
        setOpenEditModal={setOpenEditModal}
        setIsCartEmpty={setIsCartEmpty}
      />
      {openEditModal && (
        <RenderModalItemDetail
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
          item={itemDataEdit}
          itemType={getItemType(itemDataEdit)}
          isCalledFromCart
          itemCart={item}
        />
      )}
    </div>
  );
};

export default ItemCart;

ItemCart.propTypes = {
  item: PropTypes.object,
  idCart: PropTypes.string,
  setIsCartEmpty: PropTypes.func,
  totalQuantityCart: PropTypes.number,
};
