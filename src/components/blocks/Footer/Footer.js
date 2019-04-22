import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Container, Row, Col } from "styled-bootstrap-grid";

// components
import ExternalLink from "components/elements/ExternalLink";

const StyledFooter = styled.footer`
  font-size: 12px;
  padding-bottom: 80px;
  margin-top: 32px;
`;

const Copyright = styled.p`
  color: ${theme("colors.text.default")};
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Row>
        <Col sm={12} className="text-center">
          <Copyright>

            Copyright&nbsp;
            <ExternalLink href="https://forxtu.space/" title="&copy;FORXTU" />

            &nbsp;
            {new Date().getFullYear()}
          </Copyright>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
);

export default Footer;
