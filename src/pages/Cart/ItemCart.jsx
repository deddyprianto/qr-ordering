import { useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { hasEmptyElement } from "../../helper";
import { RenderExpandDetail } from "./RenderExpandDetail";
import { RenderQty } from "./RenderQty";
import RenderModalItemDetail from "../../components/ModalAddItem";
import { getItemType } from "../../components/RenderItemProduct/GetItemType";
import { numberFormatter } from "../../utilities/numberFormatter";

const ItemCart = ({ item, idCart, setIsCartEmpty, totalQuantityCart }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [expandItem, setExpandItem] = useState(false);
  const theme = useSelector((state) => state.dataSlicePersisted.theme);
  const [itemDataEdit, setItemDataEdit] = useState([]);
  const isEmptyArray = hasEmptyElement(item?.attributes) && hasEmptyElement(item?.bundles);

  return (
    <div className="items-stretch self-stretch border border-[#D6D6D6] flex w-full flex-col rounded-lg border-solid mt-[16px]">
      <div className="flex justify-between gap-4 py-2 items-start px-[8px]">
        <div>{item?.productInfo?.itemName}</div>
        <div className="w-[45px] text-center">
          $ {numberFormatter(item?.amount)}
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
  totalQuantityCart: PropTypes.func,
};
