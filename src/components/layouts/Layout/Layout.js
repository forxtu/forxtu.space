import React, { createContext } from "react";
import { object, node, array, string } from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";
import { ThemeProvider } from "src/ThemeContext";
import { IntlProvider } from "gatsby-plugin-intl";

// styles
import GlobalStyles from "styles/globalStyles";

// components
import Transition from "components/helpers/Transition";
import Navbar from "components/blocks/Navbar";
import Footer from "components/blocks/Footer";
import Head from "components/layouts/Layout/Head";

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  require("smooth-scroll")('a[href*="#"]', { offset: 60 });
}

const LayoutWrapper = styled.div`
  background: ${theme("colors.layout.bg")};
  img {
    max-width: 100%;
  }
`;

export const LanguageContext = createContext(null);

const Layout = ({
  children,
  location,
  pageContext: {
    intl: { language, languages }
  }
}) => (
  <ThemeProvider>
    <LanguageContext.Provider value={{ language, languages }}>
      <LayoutWrapper className="layout">
        <GlobalStyles />
        <Head />
        <IntlProvider locale={language}>
          <Navbar
            location={location}
            language={language}
            languages={languages}
          />
        </IntlProvider>
        <Transition location={location}>{children}</Transition>
        <Footer />
      </LayoutWrapper>
    </LanguageContext.Provider>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: node.isRequired,
  location: object.isRequired,
  languages: array,
  language: string,
  intl: object,
  pageContext: object
};

Layout.defaultProps = {
  languages: ["ru", "en"],
  language: "ru"
};
