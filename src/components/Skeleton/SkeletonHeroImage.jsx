export const SkeletonHeroImage = () => {
  return (
    <div className="">
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
    </div>
  );
};
