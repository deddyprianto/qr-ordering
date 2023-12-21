import Lottie from 'lottie-react';
import loaderAnimation from '../assets/lottie/loader.json'; 

const Loader = () => {
    return (
      <div className="justify-center items-stretch flex w-full flex-col px-4 py-12">
        <Lottie
            animationData={loaderAnimation}
            loop={true}
            autoplay={true}
            className="mx-auto"
            style={{ width: '50%', height: '100%' }} // Set animation size to inherit from parent
          />
        <div className="text-black text-center text-base font-bold self-center whitespace-nowrap mt-6">
          {"Please Wait..."}
        </div>
        <div className="text-black text-center text-sm font-medium whitespace-nowrap mt-1 mb-44">
          {"Sit tight, and we'll have everything ready in a moment."}
        </div>
      </div>
      );
};

export default Loader;