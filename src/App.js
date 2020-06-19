import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { theme_one, theme_two } from "./theme/themes";
import ThemeSelect from "./components/ThemeSelect";

// Todo el css va entre los backtits
const AppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// El & es como un .this
const AppLogo = styled.img`
  animation: ${rotate360} infinite 12s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 3s linear;
  }
`;
const AppHeader = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 150px;
  padding: 20px;
  color: white;
`;
const AppTitle = styled.h1`
  font-size: 1.3em;
`;
const AppIntro = styled.p`
  font-size: large;
`;

// También se puede utiizar className en AppWrapper si si requiere

function App() {
  const [theme, setTheme] = useState(theme_one);

  const handleThemeChange = (e) => {
    let theme = e.target.value;
    // Atención: compara con un texto, asigna un objeto
    theme === "theme_one" ? (theme = theme_one) : (theme = theme_two);
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Hello Ironhacker!!</AppTitle>
        </AppHeader>
        <AppIntro>Este es el intro...</AppIntro>
        <Button>Press Me!!</Button>
        <Button primary>Press Me Primary!!</Button>
        <Button secondary>Press Me Secondary!!</Button>
        <Button danger>Press Me Danger!!</Button>
        <ThemeSelect handleThemeChange={handleThemeChange} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
