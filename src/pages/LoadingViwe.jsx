import Lottie from "lottie-react"
import loadingLottie from "../assets/lottiefiles/loading.json"
import styled from "styled-components"


const StyledLottie = styled(Lottie)`
width: 100vw;
`

const LoadingView = () => {
    return ( <StyledLottie animationData={loadingLottie}/> );
}
 
export default LoadingView;