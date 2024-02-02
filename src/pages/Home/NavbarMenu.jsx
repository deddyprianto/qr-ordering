import { useState, useEffect, useRef } from "react";
import {  useSelector } from "react-redux";
import { MenuGroup } from "./MenuGroup";
import { GET } from "../../utilities/services";
import image1 from "../../assets/image1.png";
import PropTypes from "prop-types";
import { SkeletonNavbar } from "../../components/Skeleton";

export const NavbarMenu = ({ 
  handleSelectGroup,
  dataCategory,
  isSelectedItem,
  dtCategoryLength,
  setDataCategory,
  setIsSelectedItem,
  setDtCategoryLength
}) => {
  const theme = useSelector((state) => state.dataSlicePersisted.theme);
  const [isLoading, setIsLoading] = useState(true);

  const outletName = useSelector(
    (state) => state.dataSlicePersisted.outletName,
  );

  const mountData = useRef();
  mountData.current = async () => {
    if(dataCategory.length>0) return;
    setIsLoading(true);
    let groupList = [];
    let dataLength = 1;

    while (groupList.length < dataLength && dataLength !== 0) {
      let result = await getMenuGroup(groupList.length);
      dataLength = result.dataLength;
      groupList = groupList.concat(result.data);
      setDataCategory([...groupList]);
      if (isSelectedItem == "")
        handleChangeGroup(groupList[0].type, groupList[0].refNo);
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
          let imageDefault = image1;
          data.push({
            name: dt.buttonTitle,
            img: dt.imageURL ? dt.imageURL : imageDefault,
            refNo: dt.refNo,
            type: dt.buttonType,
          });
        }
      }
      return { data, dataLength };
    });
  };

  const handleChangeGroup = (type, refNo) => {
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
          {dataCategory.map((item, index) => {
            return (
              <MenuGroup
                key={index}
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
};
