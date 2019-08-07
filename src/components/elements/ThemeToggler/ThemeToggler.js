import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

// hooks
import { useTheme } from "src/ThemeContext";

// utils
import { translatedMessage } from "utils/helpers";

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
      title={translatedMessage("Цветовая схема", "Color scheme")}
    >
      {themeState.dark ? (
        <StyledSpan>
          <span role="img" aria-label="light">
            ☀️
          </span>
        </StyledSpan>
      ) : (
        <StyledSpan>
          <span role="img" aria-label="light">
            🌑
          </span>
        </StyledSpan>
      )}
    </ThemeTogglerWrapper>
  );
};

export default ThemeToggler;
