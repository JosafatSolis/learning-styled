import React from "react";
import styled, { keyframes } from "styled-components";

const size={
    mobile: '320px',
    laptop: '1024px',
    tablet: '768px'
}

const device = {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
    tablet: `(min-width: ${size.tablet})`,
}

const changeColor = keyframes`
    0%{
        background:${props => props.theme.primary};
    }
    100%{
        background:${props => props.theme.secundary};
    }
`;

// Importa el orden de los tamaños en el media query:
const NewDiv = styled.div`
  background: ${(props) => props.theme.primary};
  color: white;
    @media ${device.mobile} {
      background: ${props => props.theme.danger};
  };
  @media ${device.tablet} {
      background: ${props => props.theme.secondary};
  };
  @media ${device.laptop} {
      background: ${props => props.theme.light};
  };

`;

const NewH3 = styled.h3`
    color:${props => props.theme.light};
`;

const UikitC = () => (
  <NewDiv className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <NewH3 className="uk-card-title">Default</NewH3>
    <p>
      Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </NewDiv>
);

export default UikitC;
