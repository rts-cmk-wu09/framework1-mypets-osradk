import Image from "../components/Image";
import Description from "../template/Description";
import imagePath from "../assets/animal.jpg";
import styled from "styled-components"
 const StyledDiv=styled.div`
 background-color:
rgba(245, 245, 250, 1);
text-align:center;

 `

const Home = () => {
  return (
    <StyledDiv>
      <Image src={imagePath} />

      <Description />

    </StyledDiv>
  );
};

export default Home;
