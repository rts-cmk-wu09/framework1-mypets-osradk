// import Image from "../components/Image";
import Heading from "../components/Heading";
import { FaPeriscope } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import hundImg from "../assets/dog.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";

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
  margin-top: 44px;
  display: flex;
  justify-content:space-around;
  padding:8px;
  width: 327px;
  height: 130px;
  border-radius: 16px;
  box-shadow: var(--box-shadow-dark);
  margin: 40px auto;
  background-color: #f5f5fa;
`;

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 500;
  max-width: 189px;
  color: rgba(79, 79, 79, 1);
  margin-top: 12px;
`;
const AboutAnimals = () => {
  const [data, error, loading] = useAxios();

  return (
    <>
      {error && <p></p>}
      {loading && <p></p>}
      {data && (
        <>
          {data.animals.map((animal) => (
            <div key={animal.id}>
              <Link to="/Detaljevisning">
                <StyledArticle>
                  <section
                    style={{
                      padding: "5px",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "16px",
                      }}
                      width="124"
                      height="124"
                      src={
                        animal.photos.length > 0
                          ? animal.photos[0].full
                          : hundImg
                      }
                    />
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
                              : animal.name
                          }
                        />
                      </div>
                      <div>
                        <BiHeart className="heart-icon" />
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
                          ? animal.description
                              .split(" ")
                              .slice(0, 8)
                              .join(" ") + "..."
                          : "Taking care of a pet is my favorite, it helps me to..."}
                      </StyledP>
                    </div>
                  </section>
                </StyledArticle>
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default AboutAnimals;
