import Lottie from "lottie-react"
import ErrorLottie from "../assets/lottiefiles/Error.json"
import styled from "styled-components"


const StyledLottie = styled(Lottie)`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ErrorView = () => {
    return ( <StyledLottie animationData={ErrorLottie}/> );
}
 
export default ErrorView;