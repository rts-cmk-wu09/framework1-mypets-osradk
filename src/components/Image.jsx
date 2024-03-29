import styled, { css } from "styled-components";

const StyledImage = styled.img`

  position: ${(props) => props.position};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  max-width: 100%;
  ${(props) =>
    (props.shadow &&
      css`
        box-shadow: 10px 10px 20px rgba(170, 170, 204, 0.9),
          -10px -10px 20px #ffffff;
      `) ||
    (props.objectFit &&
      css`
        object-fit: cover;
      `)};

  border-radius:${(props) => props.borderradius}%;
`;

const Image = (props) => {
  return (
    <div>
      <StyledImage {...props} />
    </div>
  );
};

export default Image;
