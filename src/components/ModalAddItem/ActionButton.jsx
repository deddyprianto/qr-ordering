import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { IconPlus } from "../../assets/svgIcon";
import { apiCart } from "../../services/Cart";
import { setCartInfo } from "../../app/dataSlicePersisted";

export const RenderButtonAdd = ({ 
  item,
  itemToAdd,
  setTypeOfModalAddItem,
  setOpenModal,
  setIsLoading
 }) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector(
    (state) => state.dataSlicePersisted.cartInfo,
  );
  const outletName = useSelector(
    (state) => state.dataSlicePersisted.outletName,
  );

  const addNewCart = async()=> {
    try {
      let body = {
        "outletName": outletName
      }
      const result = await apiCart("POST", "", body);
      if(result.resultCode == 200){
        console.log(result)
        dispatch(setCartInfo(result.data));
        return result.data?.uniqueID
      }
      else throw(result.message);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleClickButton = async() => {
    setIsLoading(true);
    let cartID = cartInfo?.uniqueID;
    if(!cartID) cartID = await addNewCart();

    if(item.bundles?.length){
      setTypeOfModalAddItem("attribute");
      return;
    }
    else if(item.attributes?.length){
      setTypeOfModalAddItem("bundle");
      return;
    }

    try {
      const result = await apiCart("POST", `${cartID}/additems`, [itemToAdd]);
      if(result.resultCode == 200){
        setOpenModal(false);
      }
      // else setSearchItemList([]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
      <div
      className="w-full flex items-center px-4 shadow-xl h-full"
      style={{
        boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <button
        onClick={() => handleClickButton()}
        className="bg-pink-500 w-full rounded-lg px-[16px] py-[12px] flex justify-center items-center cursor-pointer"
      >
        <div className="flex items-stretch gap-2">
          <IconPlus />
          <div className="text-white text-xs font-bold leading-4 self-center my-auto">
            Add
          </div>
        </div>
      </button>
    </div>
  );
};

RenderButtonAdd.propTypes = {
  item: PropTypes.object,
  itemToAdd: PropTypes.object,
  setTypeOfModalAddItem: PropTypes.func,
  setOpenModal: PropTypes.func,
  setIsLoading: PropTypes.func
}