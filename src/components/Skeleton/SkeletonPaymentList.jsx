export const SkeletonList = () => {
  const renderSkeletonChild = () => {
    return (
      <div className="bg-transparent shadow-md rounded-lg py-4 px-4 space-y-1 animate-pulse flex items-center">
        <div className="rounded-lg h-8 bg-gray-300 w-[40px]"></div>
        <div className="h-[10px] bg-gray-300 rounded-sm w-[40px] mr-auto ml-1"></div>
      </div>
    );
  };
  return (
    <div id="showSkeletonPaymentMethod" className="flex gap-2 py-2">
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
      {renderSkeletonChild()}
    </div>
  );
};
