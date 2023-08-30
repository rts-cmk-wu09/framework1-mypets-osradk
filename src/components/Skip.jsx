import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledH4 = styled.h4`
  color: white;
  padding-top: 12px;
  font-weight: 300;
`;

const StyledButton = styled.button`
  width: 327px;
  background-color: rgba(87, 65, 157, 1);
  height: 44px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: ${(props) => props.margintop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

const Skip = (props) => {
  return (
    <Link to="/Listevisning">
      <StyledButton {...props}>
        <StyledH4>{props.title}</StyledH4>
      </StyledButton>
    </Link>
  );
};

export default Skip;
