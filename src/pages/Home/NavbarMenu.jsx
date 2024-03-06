import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuGroup } from "./MenuGroup";
import { GET } from "../../utilities/services";
import PropTypes from "prop-types";
import { SkeletonNavbar } from "../../components/Skeleton/SkeletonNavbar";
import { setGroupCollecting } from "../../app/dataSlice";

export const NavbarMenu = ({
  handleSelectGroup,
  dataCategory,
  isSelectedItem,
  dtCategoryLength,
  setDataCategory,
  setIsSelectedItem,
  setDtCategoryLength,
  setIsLoadingParent,
}) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { outletName, theme } = useSelector(
    (state) => state.dataSlicePersisted,
  );

  const mountData = useRef();
  mountData.current = async () => {
    if (dataCategory.length > 0) return;
    setIsLoading(true);
    let groupList = [];
    let dataLength = 1;
    let isNeedToChangeGroup = true;
    while (groupList.length < dataLength && dataLength !== 0) {
      let result = await getMenuGroup(groupList.length);
      dataLength = result.dataLength;
      groupList = groupList.concat(result.data);
      setDataCategory([...groupList]);
      dispatch(setGroupCollecting([...groupList]));
      if (isNeedToChangeGroup) {
        isNeedToChangeGroup = false;
        handleChangeGroup(groupList[0].type, groupList[0].refNo);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    mountData.current();
  }, []);

  const getMenuGroup = async (skip = 0, take = 5) => {
    let obj = {
      skip: skip,
      take: take,
    };

    return GET(`products/${outletName}`, obj).then((result) => {
      setDtCategoryLength(result.dataLength);
      let data = [];
      let dataLength = result.dataLength;
      for (const dt of result.data) {
        if (
          dt.buttonType.toLowerCase() == "category" ||
          dt.buttonType.toLowerCase() == "folder"
        ) {
          data.push({
            name: dt.buttonTitle,
            img: dt.imageURL || theme.Image_Item_Place_Holder,
            refNo: dt.refNo,
            type: dt.buttonType,
            viewType: dt.viewType,
          });
        }
      }
      return { data, dataLength };
    });
  };

  const handleChangeGroup = (type, refNo) => {
    setIsLoadingParent(true);
    setIsSelectedItem(refNo);
    handleSelectGroup(type, refNo);
  };

  return (
    <div
      style={{
        backgroundColor: theme.Color_Primary,
      }}
      className="overflow-x-auto flex border-t-[#F9F9F9] rounded-b-lg pl-[16px] pr-[16px]"
    >
      {(dtCategoryLength > dataCategory.length || dataCategory.length == 0) &&
      isLoading ? (
        <SkeletonNavbar />
      ) : (
        <>
          {dataCategory.map((item) => {
            return (
              <MenuGroup
                key={item.refNo}
                label={item.name}
                imageItem={item.img}
                refNo={item.refNo}
                type={item.type}
                handleSelected={() => {
                  handleChangeGroup(item.type, item.refNo);
                }}
                isGlow={item.refNo == isSelectedItem}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

NavbarMenu.propTypes = {
  handleSelectGroup: PropTypes.func,
  dataCategory: PropTypes.array,
  isSelectedItem: PropTypes.string,
  dtCategoryLength: PropTypes.number,
  setDataCategory: PropTypes.func,
  setIsSelectedItem: PropTypes.func,
  setDtCategoryLength: PropTypes.func,
  setIsLoadingParent: PropTypes.func
};
