import { useState } from "react";
import { NavbarMenu } from "./NavbarMenu";
import { Insights } from "../../components/Insights";
import { SubGroupMenu } from "./SubGroupMenu";
import {  useSelector } from "react-redux";
import "../../scss/animation.scss";
import { Skeleton } from "../../components/Skeleton";
import { GET } from "../../utilities/services";
import { ProductCatalog } from "./ProductCatalog";

export const MainView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessToGetItem, setIsProcessToGetItem] = useState(true);
  const [highlights, setHighlights] = useState(true);
  const [menuSubGroup, setMenuSubGroup] = useState([]);
  const [selectedSubGroup, setSelectedSubGroup] = useState("");
  const [isHasSubGroup, setIsHasSubGroup] = useState([]);
  const outletName = useSelector(
    (state) => state.dataSlicePersisted.outletName,
  );
  const isSearchItem = useSelector(
    (state) => state.dataSlicePersisted.isSearchItem,
  );

  const fetchAllSubGroupItem = async(subGroup) => {
    for (const sb of subGroup) {
      sb.items = [];
      let dataLength = 1;
    
      while (sb.items.length < dataLength && dataLength !== 0) {
        let result = await getMenuItem(sb.buttonType, sb.refNo, sb.items.length);
        dataLength = result.dataLength;
        sb.items = sb.items.concat(result.tempItem);
      }
      setMenuSubGroup([...subGroup]);
    }
    setIsProcessToGetItem(false)
  };

  const handleSelectGroup = async(type, refNo) => {
    setIsLoading(true);
    setIsProcessToGetItem(true);
    setMenuSubGroup([]);
    let data = await getMenuItem(type, refNo);
    setIsHasSubGroup(data.tempSubGroup?.length>0)
    if(data.tempSubGroup?.length>0){
      setSelectedSubGroup(data.tempSubGroup[0].refNo);
      fetchAllSubGroupItem(data.tempSubGroup);
    }
    else{
      setIsProcessToGetItem(false)
      setMenuSubGroup([{
        refNo: "",
        items: data.tempItem
      }]);
    }
    setIsLoading(false);
  };
  
  const getMenuItem = (type, refNo, skip=0, take=5) => {
    let obj = {
      skip: skip,
      take: take,
    };
    
    return GET(`products/${outletName}/${type}/${refNo}`, obj).then((res) => {
      let tempSubGroup = [];
      let tempItem = [];
      let dataLength = res.dataLength;
      res.data.map((dt) => {
        if (dt.buttonType.toLowerCase() == "folder") {
          tempSubGroup.push(dt);
        } else if (dt.buttonType.toLowerCase() != "item") {
          tempSubGroup.push(dt);
        } else if (dt.buttonType.toLowerCase() == "item") {
          tempItem.push(dt);
        }
      });
      return {tempItem, tempSubGroup, dataLength}
    });
  };

  return (
    <div className="relative pb-20">
      <NavbarMenu
        handleSelectGroup={handleSelectGroup}
      />
      <div style={{ padding: "16px 16px 0px 16px" }}>
        {(!isLoading && highlights) && (
          <Insights
            title="Tag Insights"
            description="Explore tags as you navigate the menu. You might encounter these tags
                          anywhere in our menu."
            onClick={() => setHighlights(false)}
          />
        )}
        {isHasSubGroup
          && <SubGroupMenu
              menuSubGroup={menuSubGroup}
              selectedSubGroup={selectedSubGroup}
              setSelectedSubGroup={setSelectedSubGroup}
        />}
        {!isLoading && <p
          style={{
            fontWeight: "700",
            fontSize: "22px",
            marginTop: "16px",
          }}
        >
          You Might Like This!
        </p>}
        <ProductCatalog menuSubGroup={menuSubGroup}/>
        {isProcessToGetItem && <Skeleton />}
      </div>
      {isSearchItem && (
        <div className="absolute inset-0 backdrop-filter backdrop-blur-lg z-0"></div>
      )}
    </div>
  );
};
