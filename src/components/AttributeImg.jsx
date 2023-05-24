import Image from "../components/Image";
import dog from "../assets/dog.png";
import styled from "styled-components";
 
const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: var(--box-shadow-dark);
  align-items: center;
  padding:10px;

`;

 const AttributeImg = () => {
   return (
     <StyledDiv>
       
       <Image src={dog}/>
     </StyledDiv>
   )
 }
 
 export default AttributeImg
 