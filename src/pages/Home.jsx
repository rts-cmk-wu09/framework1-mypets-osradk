import Image from "../components/Image";
import Description from "../template/Description";
import imagPath from "../assets/animal.jpg";
import styled from "styled-components"
 const StyledDiv=styled.div`
 background-color:
rgba(245, 245, 250, 1);
text-align:center;
 `

const Home = () => {
  return (
    <StyledDiv>
      <Image src={imagPath} />

      <Description />

    </StyledDiv>
  );
};

export default Home;
