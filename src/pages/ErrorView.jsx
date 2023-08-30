import Lottie from "lottie-react";
import ErrorLottie from "../assets/lottiefiles/Error.json";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledLottie = styled(Lottie)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

`;

const StyledDiv = styled.div`
  cursor: pointer !important;

&:hover {
  cursor: pointer !important;
}
`
const ErrorView = () => {
  return (
   <StyledDiv>
      <Link to="/Listevisning">
        <StyledLottie animationData={ErrorLottie} />
      </Link></StyledDiv>
   
  );
};

export default ErrorView;
