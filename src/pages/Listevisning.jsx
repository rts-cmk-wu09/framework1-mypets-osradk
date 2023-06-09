import DropdownInput from "../components/DropdownInput";
import Image from "../components/Image";
import ProfilImg from "../assets/profil.png";
import { BsBell } from "react-icons/bs";
import styled from "styled-components";
import Animals from "../template/Animals";
import AboutAnimals from "../template/AboutAnimals";
import Footer from "../template/Footer";


const StylesHeader = styled.header`
border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position:sticky;
  background-color:white;
  width:100%;
top:0;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 28px;
  width: 100%;
`;

const StyledSection1 = styled.section`
  display: flex;
  justify-content: space-between;
padding: 24px 24px 0 24px ;
 
`;
const StyledMain = styled.main`


 padding-bottom:75px;
`;
const Listevisning = () => {
  

  return (
    <>
   
        <StylesHeader>
        <StyledSection1>
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
              <DropdownInput />
            </div>
          </StyledDiv>
          <div>
            <BsBell className="notification-icon" />
          </div>
          </StyledSection1>
          <StyledSection>
          
          <Animals title="Dogs" />
          <Animals title="Cats" />
          <Animals title="Bird" />
          <Animals title="Other" />
  
         
          </StyledSection>
        </StylesHeader>
  
      <StyledMain>
   
        <AboutAnimals />
      </StyledMain>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Listevisning;
