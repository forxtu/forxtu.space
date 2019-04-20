import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Container } from "styled-bootstrap-grid";
import { ThemeProvider } from "src/ThemeContext";

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

const Layout = ({ children, location }) => (
  <ThemeProvider>
    <LayoutWrapper className="layout">
      <GlobalStyles />
      <Head />
      <Navbar location={location} />
      <Transition location={location}>
        <Container fluid>{children}</Container>
      </Transition>
      <Footer />
    </LayoutWrapper>
  </ThemeProvider>
);

export default Layout;
