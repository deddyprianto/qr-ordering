import PropTypes from "prop-types";
import { RenderAttItem } from "./AttributesItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const RenderAttGroup = ({
  attGroup,
  idxAttGroup,
  handleClickAttItem,
  isFromBundle = false,
}) => {
  return (
    <div style={{ width: "90vw" }}>
      <div className="text-black text-xs font-medium leading-5 tracking-wide pt-2">
        {attGroup.attributesGroupName}
      </div>
      <Swiper
        style={{
          width: "100%",
        }}
        slidesPerView="auto"
        spaceBetween={12}
      >
        {attGroup.items?.map((att, idx) => {
          return (
            <SwiperSlide
              key={att.attributesCode}
              style={{ flexShrink: "unset" }}
            >
              <RenderAttItem
                id={att.attributesCode}
                key={att.attributesCode}
                att={att}
                idxAttGroup={idxAttGroup}
                idxAttItem={idx}
                handleClickAttItem={handleClickAttItem}
                isFromBundle={isFromBundle}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

RenderAttGroup.propTypes = {
  attGroup: PropTypes.object,
  idxAttGroup: PropTypes.number,
  handleClickAttItem: PropTypes.func,
  isFromBundle: PropTypes.bool
};