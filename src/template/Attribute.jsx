import styled , { css }  from "styled-components";
import Image from "../components/Image";
import pawprint from "../assets/pawprint.png";
import group from "../assets/Group.png";
import Heading from "../components/Heading";
import AttributeImg from "../components/AttributeImg";
import { useContext } from "react";
import { AnimalContext } from "../AnimalContext";

const StyledP = styled.p`
  color: #9e9e9e;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 16px auto;
  align-self: left;
`;

const StyledArticle = styled.article`
  display: flex;
gap:16px;
  margin-top: 24px;
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const StyledDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: F5F5FA;
  border-radius: 100%;
  padding: 5px;
  box-shadow: var(--box-shadow-dark);
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv1 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 19px;
`;
const StyledSpan = styled.span`
  color: #57419d;
  font-weight: 900;
`;
const Attribute = ({ onImageClick }) => {
  const { animalData } = useContext(AnimalContext);

  console.log(animalData.data);

  return (
    <>
      <StyledArticle>
        <StyledSection>
          <StyledDiv>
            <Image src={pawprint} width="24" height="24" />
          </StyledDiv>
          <div style={{ width: "100px" }}>
            <Heading title={animalData.data.breeds.primary} as="h3" />
          </div>
        </StyledSection>
        <StyledSection>
          <StyledDiv>
            <Image src={group} width="24" height="24" />
          </StyledDiv>
          <div>
            <Heading title={animalData.data.gender} as="h3" />
          </div>
        </StyledSection>
      </StyledArticle>
      <div style={{ width: "327px" }}>
      <StyledP>{animalData.data.description}</StyledP></div>
      <StyledDiv1 key={animalData.id}>
        <AttributeImg onImageClick={onImageClick} />
    
      </StyledDiv1>
    </>
  );
};

export default Attribute;
