import { ImageOptimization } from "./ImageOptimization";
import imgValidityError from "../assets/validityError.png";
import { Trans } from "react-i18next";

const RenderValidityError = () => {
  return (
    <div className="p-[16px] flex flex-col justify-start items-center h-full">
      <div>
        <ImageOptimization
          imageItems={imgValidityError}
          width={246}
          height="246px"
        />
      </div>
      <div className="text-center mt-5 font-bold">
        <Trans i18nKey={"something_broken"} />
      </div>
      <div className="text-center mt-2">
        <Trans i18nKey={"invalid_url_msg"} />
      </div>
    </div>
  );
};

export default RenderValidityError;
