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
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
 
  background-color: white;
  width: 100%;
  top: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledSection = styled.section`
display: flex;
justify-content:center;
align-items:center;
gap: 10px;




`;

const StyledSection1 = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
`;
const StyledMain = styled.main`
  padding-bottom: 100px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
