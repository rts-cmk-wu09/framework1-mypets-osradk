import styled from "styled-components"

const StyledHeading=styled(props=> props.as)`

font-size:${props=> props.size}px;
padding-left:${props => props.paddingLeft}px;
  padding-top: ${props => props.padding}px;
  margin-left: ${props => props.margin}px;
  font-weight:${props => props.Weight};
  text-align:${props => props.textalign};
width: ${props => props.width}px;
  align-self:${props => props.align};
  align-aitem:${props=>props.alighAtem};
 color:${props => props.color};
font-siz:${props=>props.fontSize}px;
`



const Heading = (props) => {
  return (
    <div>
  <StyledHeading {...props}>{props.title}</StyledHeading>
    </div>
  )
}

export default Heading

