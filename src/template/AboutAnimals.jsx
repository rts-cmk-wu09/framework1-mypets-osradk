import Image from "../components/Image";
import Heading from "../components/Heading";
import { FaPeriscope } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import hunImg from "../assets/dog.png";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content:space-between;
  margin-bottom:8px;
  margin-top:12px;
`;
const SyledDiv1 = styled.div`
  display: flex;
  gap:5px;
`;
const StyledArticle = styled.article`
  margin-top: 44px;
  display: flex;
  width: 327px;
  height: 130px;
  border-radius: 16px;
  box-shadow: var(--box-shadow-dark);
  margin: 40px auto;
 background-color:
#F5F5FA
`;

const StyledP=styled.p`
font-size:14px;
font-weight:500;
max-width:189px;
color:rgba(79, 79, 79, 1);
margin-top:12px;


`
const AboutAnimals = () => {
  return (
    <div>
      <StyledArticle>
        <section>
          <Image src={hunImg} width="124" height="124" />
        </section>
        <section>
          <StyledDiv>
            <div>
              <Heading as="h2" title="Greyhound" />
            </div>
            <div>
              <BiHeart className="heart-icon" />
            </div>
          </StyledDiv>
          <SyledDiv1>
            <div>
              
              <FaPeriscope  className="navigation-icon"/>
            </div>
            <div>
            
              <Heading as="h5" title="New York City" fontSize="12" color=" grey"/>
            </div>
          </SyledDiv1>

          <div>
            <StyledP>Taking care of a pet is my favorite, it helps me to...</StyledP>
          </div>
        </section>
      </StyledArticle>
    </div>
  );
};

export default AboutAnimals;
