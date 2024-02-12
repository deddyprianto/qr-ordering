export const Skeleton = () => {
  const renderSkeletonChild = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-2 space-y-2 animate-pulse ">
        <div className="rounded-lg h-32 bg-gray-300 lg:h-40"></div>

        <div className="flex gap-2">
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-gray-300"></div>
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-gray-300"></div>
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-gray-300"></div>
        </div>
        <div className="h-2 bg-gray-300 rounded-md w-1/2"></div>
        <div className="h-2 bg-gray-300 rounded-md w-[75%]"></div>
        <div className="flex justify-center items-center w-full h-2 rounded-lg bg-gray-300"></div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-2 gap-4 mt-1">
      {renderSkeletonChild()}
      {renderSkeletonChild()}
    </div>
  );
};

export const SkeletonTagInsight = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-2 space-y-2 animate-pulse w-full">
        <div className="rounded-lg h-5 bg-gray-300"></div>
        <div className="flex gap-2">
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-gray-300"></div>
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-gray-300"></div>
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-gray-300"></div>
        </div>
        <div className="h-2 bg-gray-300 rounded-md w-1/2"></div>
        <div className="h-2 bg-gray-300 rounded-md w-[75%]"></div>
        <div className="flex justify-center items-center w-full h-2 rounded-lg bg-gray-300"></div>
      </div>
      <div className="animate-pulse mt-5 flex justify-center items-center  h-[17px] rounded-lg bg-gray-300 w-[60%]"></div>
    </div>
  );
};

export const SkeletonNavbar = () => {
  const renderSkeletonChild = () => {
    return (
      <div className="bg-transparent shadow-md rounded-lg py-4 px-4 space-y-1 animate-pulse">
        <div className="rounded-lg h-16 bg-gray-300 w-[64px]"></div>
        <div className="h-2 bg-gray-300 rounded-md w-[75%] mr-auto ml-auto"></div>
      </div>
    );
  };
  return (
    <div className="flex gap-1">
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
    </div>
  );
};

export const SkeletonPaymentList = () => {
  const renderSkeletonChild = () => {
    return (
      <div className="bg-transparent shadow-md rounded-lg py-4 px-4 space-y-1 animate-pulse flex items-center">
        <div className="rounded-lg h-8 bg-gray-300 w-[40px]"></div>
        <div className="h-[10px] bg-gray-300 rounded-sm w-[40px] mr-auto ml-1"></div>
      </div>
    );
  };
  return (
    <div className="flex gap-2 py-2">
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
    </div>
  );
};
export const SkeletonSearch = () => {
  const renderSkeletonChild = () => {
    return (
      <div className="w-full grid grid-cols-gridSkeletonSearch bg-white shadow-md rounded-lg animate-pulse mt-2 gap-x-3 p-1">
        <div className="rounded-lg h-32 bg-gray-300"></div>

        <div className="flex justify-between flex-col py-2">
          <div className="h-10 bg-gray-300 rounded-md w-full"></div>
          <div className="h-5 bg-gray-300 rounded-md w-1/2"></div>
          <div className="flex justify-center items-center w-10/12 h-5 rounded-lg bg-gray-300"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="px-[16px]">
      <div className="h-5 bg-gray-300 rounded-md w-4/5 mt-5 animate-pulse"></div>
      <div className="h-5 bg-gray-300 rounded-md w-1/2 mt-5 animate-pulse"></div>
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
    </div>
  );
};

export const SkeletonSubGroupMenu = () => {
  return (
    <div className="mt-5 flex flex-col gap-2 animate-pulse">
      <div className="h-2 bg-gray-300 rounded-md w-1/2"></div>
      <div className="h-2 bg-gray-300 rounded-md w-[75%]"></div>
      <div className="flex justify-center items-center w-full h-2 rounded-lg bg-gray-300"></div>
    </div>
  );
};
export const SkeletonSummaryPage = () => {
  const renderSkeletonChild = () => {
    return (
      <div className="w-full grid grid-cols-gridSkeletonSearch bg-white shadow-md rounded-lg animate-pulse mt-2 gap-x-3 p-1">
        <div className="rounded-lg h-32 bg-gray-300"></div>

        <div className="flex justify-between flex-col py-2">
          <div className="h-8 bg-gray-300 rounded-md w-full"></div>
          <div className="h-5 bg-gray-300 rounded-md w-1/2"></div>
          <div className="flex justify-center items-center w-10/12 h-5 rounded-lg bg-gray-300"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full mt-2">
      <div className="flex justify-between items-center px-[5px]">
        <div className="h-5 bg-gray-300 rounded-md w-[40%] mt-5 animate-pulse"></div>
        <div className="h-5 bg-gray-300 rounded-md w-[40%] mt-5 animate-pulse"></div>
      </div>
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
    </div>
  );
};
