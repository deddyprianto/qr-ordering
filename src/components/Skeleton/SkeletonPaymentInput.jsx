import PropTypes from "prop-types";

export const SkeletonPaymentInput = ({ color }) => {
  const repeatElement = () => {
    const times = Array.from({ length: 4 });
    const repeatedElements = times.map((_, index) => (
      <div key={index}>
        <div className="p-[8px] flex items-center justify-between animate-pulse mt-5">
          <div className="w-[16px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
          <div className="w-[87px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
          <div className="ml-1 w-[16px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
          <div className="flex items-center">
            <div
              style={{
                backgroundColor: color?.Color_Secondary,
              }}
              className="rounded-lg h-[36px] w-[36px] "
            ></div>
            <div className="bg-gray-200 w-[54px] h-[36px] mx-[5px] rounded-lg"></div>
            <div
              style={{
                backgroundColor: color?.Color_Secondary,
              }}
              className="h-[36px] w-[36px] rounded-lg "
            ></div>
          </div>
        </div>
        <div className="p-[8px] flex justify-between items-center">
          <div className="w-[201px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
          <div className="w-[30px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
        </div>
      </div>
    ));

    return <>{repeatedElements}</>;
  };

  return (
    <div id="SkeletonPaymentInput" className="flex flex-col w-full px-[16px]">
      <div className="w-[115px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
      <div className="mt-2 w-[269px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
      <div className="p-[8px] my-4 flex justify-between items-center">
        <div className=" w-[69px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
        <div className=" w-[30px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
      </div>

      <div className="p-[8px] flex justify-between items-center">
        <div className="w-[201px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
        <div className="w-[30px] h-[10.5px] rounded-xl bg-gradient-to-r from-transparent via-gray-300 to-gray-300 animate-pulse" />
      </div>
      {repeatElement()}
      <footer
        className={`fixed bottom-0 left-0 bg-white text-center rounded-t-2xl p-[16px] w-full`}
        style={{
          boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <button
          id="footerButtonSubmit"
          style={{ backgroundColor: color?.Color_Secondary }}
          className={`py-[10px] px-[20px]  text-white rounded-lg cursor-pointer text-[16px] w-full`}
        >
          Submit
        </button>
      </footer>
    </div>
  );
};

SkeletonPaymentInput.propTypes = {
  color: PropTypes.string,
};
