import Image from "../components/Image"
import detaljeImg from "../assets/animal1.png"
import styled from "styled-components"
import Heading from "../components/Heading"
import { FaPeriscope } from "react-icons/fa";
import Attribute from "../template/Attribute"
import Skip from "../components/Skip"

const StyledMain =styled.main`
border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color:
#F5F5FA;
  margin-top:-40px;
  position:relative;
  z-index:2;
  padding:24px;
 

`

const StyledHeader =styled.header`
posation:relative;
`
const SyledDiv=styled.div`
  display: flex;
  gap:5px;
`
const Detaljevisning = () => {
  return (
    <div>
      <StyledHeader>
<Image
position="absolut"
 
    src={detaljeImg}
/>
      </StyledHeader>
      <StyledMain>
<Heading
    title="Greyhound"
    as="h1"
    weight="900"
    textAlign="left"
/>

<SyledDiv>
            <div>
              
              <FaPeriscope  className="navigation-icon"/>
            </div>
            <div>
            
              <Heading as="h5"  weight="500" title="New York City" fontSize="14" color="#828282"/>
            </div>
          </SyledDiv>
          <Attribute/> 
           <Skip marginTop="36"/>
      </StyledMain>
 
    </div>
  )
}

export default Detaljevisning
