import styled from "styled-components";
import Heading from "../components/Heading";
const StyledDiv = styled.div`
  width: 76px;
  height: 32px;
  border-radius: 16px;
  box-shadow: var(--box-shadow-dark);
  background-color: #f5f5fa;
  display: flex;
  justify-content:center;
  align-items: center;
 

`;
const StyledSection=styled.section`
padding-bottom:24px;

`

const Animals = (props) => {
  
  return (
<StyledSection>
    <StyledDiv>
      <Heading
        color="#7878AB"
        as="h4"
        title={props.title} 
        weight="700"
        fontSize="14"
       
      />
    </StyledDiv>
    </StyledSection>
  );
};

export default Animals;
