import { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { MenuGroup } from "./MenuGroup";
import { GET } from "../../utilities/services";
import image1 from "../../assets/image1.png";
import PropTypes from "prop-types";
import { SkeletonNavbar } from "../../components/Skeleton";

export const NavbarMenu = ({ handleSelectGroup }) => {
  const [isSelectedItem, setIsSelectedItem] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [dtCategoryLength, setDtCategoryLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const outletName = useSelector(
    (state) => state.dataSlicePersisted.outletName,
  );

  useEffect(() => {
    const timetOutId = setTimeout(() => {
      mountData();
    }, 1);
    return () => {
      clearTimeout(timetOutId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const mountData = async() => {
    setIsLoading(true)
    let groupList = [];
    let dataLength = 1;
  
    while (groupList.length < dataLength && dataLength !== 0) {
      let result = await getMenuGroup(groupList.length);
      dataLength = result.dataLength;
      groupList = groupList.concat(result.data);
      setDataCategory([...groupList])
      console.log(isSelectedItem)
      if(isSelectedItem=="") handleChangeGroup(groupList[0].type, groupList[0].refNo)
    }
  setIsLoading(false);
  };

  const getMenuGroup = async(skip=0, take=5) => {
    let obj = {
      skip: skip,
      take: take,
    };

    return GET(`products/${outletName}`, obj).then((result) => {
      setDtCategoryLength(result.dataLength);
      let data = [];
      let dataLength = result.dataLength;
      for(const dt of result.data){
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
      return {data, dataLength};
    });
  }

  const handleChangeGroup = (type, refNo) => {
    setIsSelectedItem(refNo);
    handleSelectGroup(type, refNo);
  }
  
  return (
    <div className="overflow-x-auto flex border-t-[color:var(--Grey-Scale-color-Grey-Scale-4,#F9F9F9)] bg-[#00524C] rounded-b-lg pl-[16px] pr-[16px]">
      {dataCategory.map((item) => {
        return (
          <MenuGroup
            key={`${item.type}_${item.refNo}_${item.name}`}
            label={item.name}
            imageItem={item.img}
            refNo={item.refNo}
            type={item.type}
            handleSelected={() =>{
              handleChangeGroup(item.type, item.refNo)
            }
            }
            isGlow={item.refNo == isSelectedItem}
          />
        );
      })}
      {((dtCategoryLength>dataCategory.length || dataCategory.length==0) 
          && isLoading) && <SkeletonNavbar />}
    </div>
  );
};

NavbarMenu.propTypes = {
  handleSelectGroup: PropTypes.func,
};
