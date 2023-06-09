import Heading from "../components/Heading"
import styled from "styled-components"
import Skip from "../components/Skip"
import Image from "../components/Image"
import imagPath from "../assets/step.png";

const StyledP=styled.p`
font-size:16px;
color:rgba(130, 130, 130, 1);
font-weight:400;
margin:0 auto;
line-height: 24px;


`
const StyledDiv=styled.div`
max-width:327px;
margin:40px auto;
background-color:
rgba(245, 245, 250, 1)

`
const Description = () => {
  return (<>
    <StyledDiv>
      <Heading
        title="My Pets"
        size="16"
        as="h1"
        textAlign="center"
        align="center"
      />
      <StyledP>
      
      </StyledP>
     </StyledDiv>
      <Image
       width="40" 

      src={imagPath} />

      <Skip marginTop="106"/>
     
   
    
    </>
  )
}

export default Description
