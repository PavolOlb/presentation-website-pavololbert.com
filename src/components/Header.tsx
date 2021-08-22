import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NONAME } from "dns";
import { theme } from "../theme";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeFromLeft = keyframes`
0% {
      opacity: 0;
      left: -300;
   }
   100% {
      opacity: 1;
      left: 0;
   }`;
const DivHeader = styled.div`
  display: flex;
  min-height: 6.5%;
  justify-content: space-between;
  font-family: "Amatic SC", cursive;
  align-items: center;
  font-size: 2em;
  background: ${theme.black};

  @media (${theme.width800}) {
    flex-direction: column;
  }
`;
const DivForMobile = styled.div`
  padding: 0 0.5em;
  @media (${theme.width800}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const HamburgerIcon = styled.i`
  color: ${theme.white};
  display: none !important;
  cursor: pointer;
  @media (${theme.width800}) {
    display: inline !important;
  }
`;
const DivBackground = styled.div`
  background: ${theme.black};
  padding: 0.5em 0;
  border-bottom: 4px solid ${theme.headerBorderColor};
`;
const LinkStyled = styled(Link)`
  color: ${theme.white};
  font-weight: 700;
  text-decoration: none;
`;
const DivLinks = styled.div<{ opened }>`
  @media (${theme.width800}) {
    z-index: 400;
    background: ${theme.white};
    width: 100%;
    text-align: center;
    display: ${(p) => (p.opened ? "block" : "none")};
    position: absolute;
    top: 56px;
    animation: 0.3s ${fadeFromLeft} ease-out;
  }
`;
const LinkMargin = styled(LinkStyled)`
  margin-right: 1em;
  @media (${theme.width800}) {
    padding: 0.5em 0;
    border-bottom: 1px solid ${theme.lightGrey};
    box-shadow: ${theme.headerShadow1} 0px 2px 5px -1px,
      ${theme.headerShadow2} 0px 1px 3px -1px;
    display: block;
    margin: 0;
    width: 100%;
    color: ${theme.brown};
  }
`;

export const MyHeader = () => {
  const [opened, setOpened] = useState(false);
  return (
    <DivBackground>
      <DivHeader>
        <DivForMobile>
          <LinkStyled to="/" exact>
            PAVOLOLBERT.COM
          </LinkStyled>
          <HamburgerIcon
            className={opened ? "fas fa-times" : "fas fa-bars"}
            onClick={() => setOpened((prev) => !prev)}
          />
        </DivForMobile>
        <DivLinks opened={opened}>
          <LinkMargin to="/aboutme" onClick={() => setOpened(false)}>
            About Me
          </LinkMargin>
          <LinkMargin to="/portfolio" onClick={() => setOpened(false)}>
            Portolio
          </LinkMargin>
          <LinkMargin to="/contact" onClick={() => setOpened(false)}>
            Contact me
          </LinkMargin>
        </DivLinks>
      </DivHeader>
    </DivBackground>
  );
};
