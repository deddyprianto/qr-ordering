import Lottie from "lottie-react"
import loaderAnimation from "../assets/lottie/loader.json"

export const ParentBlur = () => {
    return <div className="absolute inset-0 backdrop-filter backdrop-blur-md z-40">
        <Lottie
            animationData={loaderAnimation}
            loop={true}
            autoplay={true}
            className="mx-auto"
            style={{ width: '50%', height: '100%' }} // Set animation size to inherit from parent
          />
    </div>
}