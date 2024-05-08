const OverlayLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 flex-col">
      <span className="loaderFooter"></span>
      <div className="text-white mt-2">Please wait...</div>
    </div>
  );
};

export default OverlayLoading;
