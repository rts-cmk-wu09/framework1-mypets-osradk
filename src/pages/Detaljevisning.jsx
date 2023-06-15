import Image from "../components/Image";
import detaljeImg from "../assets/images.png";
import styled from "styled-components";
import Heading from "../components/Heading";
import { FaPeriscope } from "react-icons/fa";
import Attribute from "../template/Attribute";
import Skip from "../components/Skip";
import { useContext } from "react";
import { AnimalContext } from "../AnimalContext";

const StyledMain = styled.main`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #f5f5fa;
  margin-top: -40px;
  position: relative;
  z-index: 2;
  padding: 24px;
`;

const StyledHeader = styled.header`
  posation: relative;
`;
const SyledDiv = styled.div`
  display: flex;
  gap: 5px;
`;

const Detaljevisning = () => {
  const { animalData } = useContext(AnimalContext);

  console.log(animalData);
  // const [animal, setAnimal] = useState(null);

  // useEffect(() => {
  //   if (animalData) {
  //     // Find the animal data based on the stored ID
  //     const selectedAnimal = data.find((animal) => animal.id === animalData.id);
  //     setAnimal(selectedAnimal);
  //   }
  // }, [animalData]);

  // if (!animal) {
  //   return <p>Loading...</p>;
  // }

  // Access the properties of the selected animal
  //const { name, city, description, photos } = animal;

  return (
    <div>
      <StyledHeader>
        <Image
          position="absolut"
          height="355"
          width="100%"
          // style={{ backgroundColor: "rgba(87, 65, 157, 1);" }}
          src={
            animalData.data.photos.length > 0
              ? animalData.data.photos[0].full
              : detaljeImg
          }
        />
      </StyledHeader>
      <StyledMain>
        {animalData && (
          <>
            <Heading
              title={animalData.data.name}
              as="h1"
              weight="900"
              textalign="left"
            />
            <SyledDiv>
              <div>
                <FaPeriscope className="navigation-icon" />
              </div>
              <div>
                <Heading
                  as="h5"
                  weight="500"
                  title={animalData.data.contact.address.city}
                  fontSize="14"
                  color="#828282"
                />
              </div>
            </SyledDiv>
            <Attribute />
            <Skip margintop="36" />
          </>
        )}
      </StyledMain>
    </div>
  );
};

export default Detaljevisning;
