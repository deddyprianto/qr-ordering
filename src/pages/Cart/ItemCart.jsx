import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { hasEmptyElement } from "../../helper";
import { apiCart } from "../../services/Cart";
import { RenderExpandDetail } from "./RenderExpandDetail";
import { RenderQty } from "./RenderQty";
import RenderModalItemDetail from "../../components/ModalAddItem";
import { getItemType } from "../../components/RenderItemProduct/GetItemType";

const ItemCart = ({ item, idCart }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [quantity, setQuantity] = useState(item?.quantity);
  const [expandItem, setExpandItem] = useState(false);
  const theme = useSelector((state) => state.dataSlice.theme);
  const [itemDataEdit, setItemDataEdit] = useState([]);
  const isEmptyArray =
    !hasEmptyElement(item?.attributes) || !hasEmptyElement(item?.bundles);

  useEffect(() => {
    const handleAPIQty = async () => {
      let body = {
        uniqueID: idCart,
        quantity: quantity,
      };
      const result = await apiCart(
        "PATCH",
        `${idCart}/${body.uniqueID}/changeitemqty`,
        body,
      );
      console.log(result);
    };
    handleAPIQty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <div className="items-stretch self-stretch border border-[#D6D6D6] flex w-full flex-col rounded-lg border-solid mt-[16px]">
      <div className="flex justify-between gap-4 py-2 items-start px-[8px]">
        <div>{item?.productInfo?.itemName}</div>
        <div className="w-[45px] text-center">
          $ {item?.productInfo?.retailPrice.toFixed(2)}
        </div>
      </div>
      <RenderExpandDetail
        expandItem={expandItem}
        isEmptyArray={isEmptyArray}
        item={item}
        theme={theme}
      />
      <RenderQty
        itemNo={item.itemNo}
        setItemDataEdit={setItemDataEdit}
        expandItem={expandItem}
        quantity={quantity}
        setQuantity={setQuantity}
        setExpandItem={setExpandItem}
        theme={theme}
        isEmptyArray={isEmptyArray}
        setOpenEditModal={setOpenEditModal}
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
};
