import DropdownInput from "../components/DropdownInput";
import Image from "../components/Image";
import ProfilImg from "../assets/profil.png";
import { BsBell } from "react-icons/bs";
import styled from "styled-components";
import Animals from "../template/Animals";
import AboutAnimals from "../template/AboutAnimals";
import Footer from "../template/Footer";
import React, { useState } from "react";
import useAxios from "../useAxios.js";
import LoadingView from "../pages/LoadingView";
import ErrorView from "../pages/LoadingView";

const StylesHeader = styled.header`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: sticky;
  background-color: white;
  width: 100%;
  top: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledSection = styled.section`
  ${
    "" /* display: flex;
  justify-content: space-around;
  margin-top: 28px;
  width: 100%; */
  }

  display: flex;
  overflow-x: scroll;

  margin: 1rem -1rem;
  padding: 1rem 2rem 1rem 2rem;
  gap: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledSection1 = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
`;
const StyledMain = styled.main`
  padding-bottom: 100px;
`;
const Listevisning = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [data, error, loading] = useAxios();

  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView />;
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <>
      <StylesHeader>
        <StyledSection1>
          <StyledDiv>
            <div>
              <Image
                style={{ border: "2px solid  whitesmoke", objectFit: "cover" }}
                width="40"
                height="40"
                shadow="true"
                borderradius="100"
                src={ProfilImg}
              />
            </div>
            <div>
              <DropdownInput data={data} onSelectCity={handleCitySelect} />
            </div>
          </StyledDiv>
          <div>
            <BsBell className="notification-icon" />
          </div>
        </StyledSection1>
        <StyledSection>
          <Animals title="All" onSelectCategory={handleCategorySelect} />
          <Animals title="Dog" onSelectCategory={handleCategorySelect} />
          <Animals title="Cat" onSelectCategory={handleCategorySelect} />
          <Animals title="Rabbit" onSelectCategory={handleCategorySelect} />
          <Animals title="Horse" onSelectCategory={handleCategorySelect} />
          <Animals title="Bird" onSelectCategory={handleCategorySelect} />
          {/* <Animals title="Other" onSelectCategory={handleCategorySelect} /> */}
        </StyledSection>
      </StylesHeader>

      <StyledMain>
        <AboutAnimals
          selectedCategory={selectedCategory}
          selectedCity={selectedCity}
        />
      </StyledMain>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Listevisning;
