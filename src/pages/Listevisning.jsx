
import DropdownInput from "../components/DropdownInput"
import Image from "../components/Image"
import ProfilImg from "../assets/profil.png"
import { BsBell } from "react-icons/bs"
import styled from "styled-components"
import Animals from "../template/Animals"
import AboutAnimals from "../template/AboutAnimals"
import Footer from "../template/Footer"

const StylesHeader=styled.header`
display:flex;
justify-content:space-between;
margin-top:70px;
padding:24px
`
const StyledDiv=styled.div`
display:flex;
justify-content:space-between;
`
const StyledSection=styled.section`
display:flex;
justify-content:space-around;
margin-top:28px;
width:100%;
  

`
const Listevisning = () => {
  return (
    <>
    <div>
      <StylesHeader>
  <StyledDiv>    
<div>
<Image
  width="40" 
  height="40"
  shadow={true}
  borderRadius="100"
    src={ProfilImg}
/>
</div>
<div>
<DropdownInput/>
</div>
</StyledDiv>  
<div>
        <BsBell className="notification-icon"/></div>
      </StylesHeader>
    </div>
    <main>
    <StyledSection>
    <Animals/>
    <Animals/>
    <Animals/>
    <Animals/>

    </StyledSection>
    <AboutAnimals/>
    <AboutAnimals/>
    <AboutAnimals/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Listevisning
