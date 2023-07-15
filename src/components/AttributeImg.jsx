import Image from "../components/Image";
import styled from "styled-components";
import { useContext } from "react";
import { AnimalContext } from "../AnimalContext";

const StyledDiv = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  box-shadow: var(--box-shadow-dark);
  align-items: center;
`;

const StyledContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 20px;
  width:1200px;
  margin-left:-2rem;
  margin: 0 -2rem;
  padding: 1rem 1rem 2rem 2rem;
  gap: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
`;

const AttributeImg = ({ onImageClick }) => {
  const { animalData } = useContext(AnimalContext);

  return (
    <StyledContainer>
      {animalData.data.photos.map((photo, index) => (
        <div key={index}>
          <StyledDiv>
            <Image
              style={{
                borderRadius: "100%",
              }}
              width="70"
              height="70"
              src={photo.full}
              onClick={() => onImageClick(photo.full)}
            />
          </StyledDiv>
        </div>
      ))}
    </StyledContainer>
  );
};

export default AttributeImg;
