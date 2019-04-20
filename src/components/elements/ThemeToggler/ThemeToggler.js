import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

// hooks
import { useTheme } from "src/ThemeContext";

const StyledSpan = styled.span`
  font-size: ${theme("sizes.fonts.mediumValuesPlus")};
`;
const ThemeTogglerWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ThemeToggler = () => {
  const themeState = useTheme();
  return (
    <ThemeTogglerWrapper
      onClick={() => themeState.toggle()}
      title="Цветовая схема"
    >
      {themeState.dark ? (
        <StyledSpan>☀️</StyledSpan>
      ) : (
        <StyledSpan>🌑</StyledSpan>
      )}
    </ThemeTogglerWrapper>
  );
};

export default ThemeToggler;
