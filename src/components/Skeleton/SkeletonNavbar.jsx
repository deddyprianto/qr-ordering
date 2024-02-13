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
