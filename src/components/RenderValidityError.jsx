import { ImageOptimization } from "./ImageOptimization";
import imgValidityError from "../assets/validityError.png";

const RenderValidityError = () => {
  return (
    <div className="p-[16px] flex flex-col justify-start items-center h-full">
      <div>
        <ImageOptimization
          imageItems={imgValidityError}
          width="246px"
          height="246px"
        />
      </div>
      <div className="text-center mt-5 font-bold">Something Broken</div>
      <div className="text-center mt-2">
        The page you are seeking is currently unavailable. The link may be
        broken. We apologize for any inconvenience.
      </div>
    </div>
  );
};

export default RenderValidityError;
