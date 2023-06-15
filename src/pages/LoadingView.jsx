import Lottie from "lottie-react"
import loadingLottie from "../assets/lottiefiles/loading.json"
import styled from "styled-components"


const StyledLottie = styled(Lottie)`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const LoadingView = () => {
    return ( <StyledLottie animationData={loadingLottie}/> );
}
 
export default LoadingView;