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
