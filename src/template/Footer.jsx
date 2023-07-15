import styled, { css } from "styled-components";
import { BiHeart } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { IoChatbubbleOutline } from "react-icons/io5";
import { useState } from "react";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #f5f5fa;
  height: 105px;
  margin: 0 auto;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5);
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;
  outline: none !important; /* Remove the default focus outline */
  -moz-outline-style: none; /* Remove the outline for Firefox */
  user-select: none; /* Disable text selection */
  -webkit-tap-highlight-color: transparent; /* Remove tap highlight on mobile */

  ${(props) =>
    props.selected &&
    css`
      svg {
        color: rgba(87, 65, 157, 1);
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
    `}

  &:hover {
    svg {
      color: rgba(87, 65, 157, 1);
    }
  }
`;

const Footer = () => {
  const [selectedIcon, setSelectedIcon] = useState("home");

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <StyledDiv>
      <IconWrapper
        selected={selectedIcon === "home"}
        onClick={() => handleIconClick("home")}
        tabIndex="0"
      >
        <FiHome className="icon" />
      </IconWrapper>
      <IconWrapper
        selected={selectedIcon === "chat"}
        onClick={() => handleIconClick("chat")}
        tabIndex="0"
      >
        <IoChatbubbleOutline className="icon" />
      </IconWrapper>
      <IconWrapper
        selected={selectedIcon === "heart"}
        onClick={() => handleIconClick("heart")}
        tabIndex="0"
      >
        <BiHeart className="icon" />
      </IconWrapper>
      <IconWrapper
        selected={selectedIcon === "person"}
        onClick={() => handleIconClick("person")}
        tabIndex="0"
      >
        <RxPerson className="icon" />
      </IconWrapper>
    </StyledDiv>
  );
};

export default Footer;
