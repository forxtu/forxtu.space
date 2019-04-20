import styled from "styled-components";
import { theme } from "styled-tools";

export const NavbarBrand = styled.button``;
export const BrandLogo = styled.span``;
export const NavbarWrapper = styled.nav`
  border-bottom: 1px solid rgba(0, 0, 0, 0.33);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);

  transition: background 0.5s;
  padding: 0.5rem 1.5rem;
  background: ${theme("colors.header.bg")};
  ${NavbarBrand} {
    cursor: pointer;
    color: black;
    background: transparent;
    font-size: ${theme("sizes.fonts.largeValues")};

    ${BrandLogo} {
      background: ${theme("colors.header.logo.bg")};
      border-radius: 3px;
      color: ${theme("colors.header.logo.color")};
      padding: 1px 5px 2px;
    }

    &:focus {
      box-shadow: none;
    }
  }
`;

export const NavbarToggler = styled.button`
  border: 0;
  color: ${theme("colors.text.default")};
  cursor: pointer;
`;

export const CollapsedMenuWrapper = styled.div``;
export const CollapsedMenuUl = styled.ul``;
