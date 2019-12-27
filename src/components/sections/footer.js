import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <BrandContainer>
      <Copyright>Copyright © 2020. All rights reserved.</Copyright>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

const Copyright = styled.div`
  ${props => props.theme.font_size.xxxsmall};
  color: ${props => props.theme.color.black.regular};
  a {
    text-decoration: none;
    color: inherit;
  }

  p{
    font-size: 10px;
    text-decoration: italic;
    color: ${props => props.theme.color.white.darker};
  }
`;

export default Footer
