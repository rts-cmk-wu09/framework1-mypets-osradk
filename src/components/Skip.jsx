import styled from "styled-components";

const StyledH4 = styled.h4`
color:white;
padding-top:12px;
font-weight:300;
`

const StyledDiv = styled.div`
  width: 327px;
  background-color: rgba(87, 65, 157, 1);
  height:44px;
  border-radius:32px;
display:flex;
justify-content:center;
margin:0 auto;
 margin-top: ${props => props.marginTop}px;
 margin-bottom:12px;
`;

const Skip = (props) => {
  return <StyledDiv{...props}> 
<StyledH4 >Skip</StyledH4>
  </StyledDiv>;
};

export default Skip;
