import Image from "../components/Image";
import dog from "../assets/dog.png";
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
           width="70"
          height="70"

          src={photo.full} />
        </StyledDiv>
      ))}
    </>
  );
};

export default AttributeImg;
