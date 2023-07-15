import styled, { css } from "styled-components";
import { BiHeart } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import {IoChatbubbleOutline} from "react-icons/io5";
const StyledDiv=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:45px;
border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #F5F5FA;
  height:105px;
  margin:0 auto;
  box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.5);
  position:fixed;
  width:100%;
  bottom:0;

`



const Footer = () => {
  return (
    <StyledDiv>
        
      <FiHome className="icon"/>
      <IoChatbubbleOutline className="icon"/>
      <BiHeart className="icon"/>
      <RxPerson className="icon"/>
    </StyledDiv>
  )
}

export default Footer
