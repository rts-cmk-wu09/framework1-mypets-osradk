import Lottie from "lottie-react"
import ErrorLottie from "../assets/lottiefiles/Error.json"
import styled from "styled-components"


const StyledLottie = styled(Lottie)`
width: 100vw;
`

const ErrorView = () => {
    return ( <StyledLottie animationData={ErrorLottie}/> );
}
 
export default ErrorView;