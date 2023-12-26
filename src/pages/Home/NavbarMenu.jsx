import { useState, useEffect } from "react";
import { ItemScroll } from "./ItemScroll";
import { GET } from "../../utilities/services";
import image1 from "../../assets/image1.png";
import PropTypes from "prop-types"

export const NavbarMenu = ({procSummaryTabMenu, procItem}) => {
  
  const [isSelectedItem, setIsSelectedItem] = useState("Christmas Menu 2023"); 
  const [dataCategory, setDataCategory] = useState([]);

  

  useEffect(() => {
    const timetOutId = setTimeout(() => {
      let obj = {
        skip: 0,
        take: 5,
      };
      GET("products/edge cafe", obj).then((x) => {
        setDataCategory(x.data);
      });
    }, 1500);
    return () => {
      clearTimeout(timetOutId);
    };
  });

  const handleSelected = (item, type, refNo) => {
    setIsSelectedItem(item);

    let obj = {
        skip: 0,
        take: 5,
      };
      GET(`products/edge cafe/${type}/${refNo}`, obj).then((x) => {
        let tempSummaryTabMenu = [];
        let tempItem = [];
        x.data.map((prop) => {
          if (prop.buttonType.toLowerCase() == "folder") {
            tempSummaryTabMenu.push(prop);
          } else if (prop.buttonType.toLowerCase() == "item") {
            tempItem.push(prop);
          }
        });
  
        procItem(tempItem);
        procSummaryTabMenu(tempSummaryTabMenu);
        
      });
  }

  let data = [];
  dataCategory?.map((x) => {
    if (
      x.buttonType.toLowerCase() == "category" ||
      x.buttonType.toLowerCase() == "folder"
    ) {
      let imageDefault = image1;
      data.push({
        name: x.buttonTitle,
        img: x.imageURL ? x.imageURL : imageDefault,
        refNo: x.refNo,
        type: x.buttonType,
      });
    }
  });
  return (
    <div className="overflow-x-auto flex border-t-[color:var(--Grey-Scale-color-Grey-Scale-4,#F9F9F9)] bg-[#00524C] rounded-b-lg pl-[16px] pr-[16px]">
      {data.map((item) => {
        return (
          <ItemScroll
            key = {`${item.type}_${item.refNo}_${item.name}`}
            label={item.name}
            imageItem={item.img}
            refNo={item.refNo}
            type={item.type}
            handleSelected = {() => handleSelected(item.name, item.type, item.refNo)}
            isGlow = {item.name == isSelectedItem}
          />
        );
      })}
    </div>
  );
};

NavbarMenu.propTypes = {
    procSummaryTabMenu : PropTypes.any,
    procItem : PropTypes.any
}