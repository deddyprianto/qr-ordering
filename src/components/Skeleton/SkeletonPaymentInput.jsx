export const SkeletonPaymentInput = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 space-y-3 animate-pulse w-full">
      <div className="h-3 bg-gray-300 rounded-md w-[70px]"></div>
      <div className="h-10 bg-gray-300 rounded-md w-[75%]"></div>

      <div className="flex justify-between items-center w-full gap-5">
        <div className="w-1/2">
          <div className="h-3 bg-gray-300 rounded-md w-[70px]"></div>
          <div className="h-10 bg-gray-300 rounded-md  mt-2"></div>
        </div>
        <div className="w-1/2">
          <div className="h-3 bg-gray-300 rounded-md w-[70px]"></div>
          <div className="h-10 bg-gray-300 rounded-md  mt-2"></div>
        </div>
      </div>

      <div className="h-3 bg-gray-300 rounded-md w-[70px]"></div>
      <div className="h-10 bg-gray-300 rounded-md w-full"></div>
    </div>
  );
};
