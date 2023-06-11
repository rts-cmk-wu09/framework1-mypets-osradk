import Image from "../components/Image";
import dog from "../assets/dog.png";
import styled from "styled-components";
import { useContext } from "react";
import { AnimalContext } from "../AnimalContext";

const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: var(--box-shadow-dark);
  align-items: center;
  
`;

const AttributeImg = () => {
  const { animalData } = useContext(AnimalContext);
  console.log(animalData.data.photos.length);

  return (
    <>
      {animalData.data.photos.map((photo, index) => (
        <StyledDiv key={index.id}>
          <Image
             style={{
                        borderRadius: "100%",
                      }}
           width="50"
          height="50"
          src={photo.full} />
        </StyledDiv>
      ))}
    </>
  );
};

export default AttributeImg;
