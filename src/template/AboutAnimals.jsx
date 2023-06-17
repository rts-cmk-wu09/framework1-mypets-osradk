// import Image from "../components/Image";
import Heading from "../components/Heading";
import { FaPeriscope } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import hundImg from "../assets/images.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";
import LoadingView from "../pages/LoadingView";
import ErrorView from "../pages/LoadingView";
import React, { useContext, useState } from "react";
import { AnimalContext } from "../AnimalContext";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 12px;
`;
const SyledDiv1 = styled.div`
  display: flex;
  gap: 5px;
`;
const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  width: 327px;
  height: 130px;
  border-radius: 16px;
  box-shadow: var(--box-shadow-dark);
  margin: 30px auto;
  background-color: #f5f5fa;
`;

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 500;
  max-width: 189px;
  color: rgba(79, 79, 79, 1);
  margin-top: 12px;
`;

const AboutAnimals = ({ selectedCategory }) => {
  const [data, error, loading] = useAxios();
  const { storeAnimalData } = useContext(AnimalContext);
  const [likedItems, setLikedItems] = useState([]);

  const isLiked = (id) => {
    return likedItems.includes(id);
  };

  const setLike = (id) => {
    setLikedItems((prevLikedItems) => [prevLikedItems, id]);
    localStorage.setItem(id, id);
  };

  const removeLike = (id) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.filter((itemId) => itemId !== id)
    );
    localStorage.removeItem(id);
  };

  const handleBookmarkToggle = (id) => {
    console.log(id);

    if (!isLiked(id)) {
      setLike(id);
    } else {
      removeLike(id);
    }
  };

  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView />;
  }

  console.log(storeAnimalData.data);

  return (
    <>
      {data &&
        data.animals &&
        data.animals
          .filter(
            (animal) =>
              selectedCategory === "All" || animal.type === selectedCategory
          )
          .map((animal) => (
            <div key={animal.id}>
              <StyledArticle>
                <section>
                  <Link
                    to="/Detaljevisning"
                    onClick={() => storeAnimalData(animal)}
                  >
                    <img
                      style={{
                        borderRadius: "16px",
                        // backgroundColor: "rgb(87, 65, 157)",
                      }}
                      width="124"
                      height="124"
                      src={
                        animal.photos.length > 0
                          ? animal.photos[0].full
                          : hundImg
                      }
                    />
                  </Link>
                </section>
                <section>
                  <StyledDiv>
                    <div>
                      <Heading
                        as="h2"
                        title={
                          animal.name.length > 25
                            ? animal.name.split(" ").slice(0, 1).join(" ") +
                              "..."
                            : animal.name.split(" ").slice(0, 1).join(" ")
                        }
                      />
                    </div>

                    <div onClick={() => handleBookmarkToggle(animal.id)}>
                      {isLiked(animal.id) ? (
                        <AiFillHeart
                          className="heart-icon"
                          style={{ color: "red" }}
                        />
                      ) : (
                        <AiOutlineHeart className="heart-icon" />
                      )}
                    </div>
                  </StyledDiv>
                  <SyledDiv1>
                    <div>
                      <FaPeriscope className="navigation-icon" />
                    </div>
                    <div>
                      <Heading
                        as="h5"
                        title={animal.contact.address.city}
                        fontSize="12"
                        color=" grey"
                      />
                    </div>
                  </SyledDiv1>

                  <div>
                    <StyledP>
                      {animal.description != null &&
                      animal.description.length > 25
                        ? animal.description.split(" ").slice(0, 8).join(" ") +
                          "..."
                        : "Taking care of a pet is my favorite, it helps me to..."}
                    </StyledP>
                  </div>
                </section>
              </StyledArticle>
            </div>
          ))}
    </>
  );
};

export default AboutAnimals;
