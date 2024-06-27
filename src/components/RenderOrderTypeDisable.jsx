import { IconOrderingModeDisable } from "../assets/svgIcon";

const RenderOrderTypeDisable = () => {
  return (
    <div
      id="orderTypeDisable"
      className="flex flex-col justify-center items-center"
    >
      <IconOrderingModeDisable />
      <h1 className="text-[16px] font-bold mt-[24px]">
        No Ordering Mode Available
      </h1>
      <p className="text-[14px] font-normal text-center">
        No ordering modes are currently available. <br /> Please try again
        later.
      </p>
    </div>
  );
};

export default RenderOrderTypeDisable;
