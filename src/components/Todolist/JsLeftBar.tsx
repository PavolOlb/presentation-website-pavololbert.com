import { theme } from "../../theme";
import { todoTheme } from "./todolist.theme";
import React from "react";
import styled from "styled-components";

const DivLeft = styled.div`
  padding: 0.5em;
  width: 20%;
  min-height: 10em;
  background: ${todoTheme.background};
  border-radius: 2%;
  @media (${theme.width1000}) {
    display: none;
  }
`;

const H1Left = styled.h1`
  margin: 0;
  font-weight: ${theme.thickerFont2};
`;

const PLeft = styled.p`
  font-size: 0.8em;
  margin: 0.2;
`;

const HrStyled = styled.hr`
  border-top: 1px dashed ${todoTheme.hrBorderColor};
  margin-bottom: 2em;
`;

const ALink = styled.a`
  color: ${todoTheme.linkColor};
  display: block;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: ${theme.grey};
  }
`;

const PQoute = styled.p`
  font-weight: ${theme.tinyFont};
  background: ${todoTheme.quoteColor};
  padding: 0.5em;
  font-size: 0.9em;
  border-radius: 5%;
`;
const PBottom = styled.p`
  font-size: 0.9em;
  font-weight: ${theme.tinyFont2};
  color: ${todoTheme.pColor};
  a {
    color: ${todoTheme.aColor};
    text-decoration: none;
    font-weight: ${theme.mediumFont};
  }
`;
export const JsLeftBar = () => {
  return (
    <DivLeft>
      <H1Left>JavaScript</H1Left>
      <PLeft>Vanilla JavaScript Example</PLeft>
      <ALink href="#">Source</ALink>
      <HrStyled />
      <PQoute>
        JavaScript® (often shortened to JS) is a lightweight, interpreted,
        object-oriented language with first-class functions, most known as the
        scripting language for Web pages, but used in many non-browser
        environments as well such as node.js or Apache CouchDB.
      </PQoute>
      <ALink href="#" style={{ textAlign: "right" }}>
        JavaScript
      </ALink>
      <HrStyled />
      <PBottom>
        If you have other helpful links to share, or find any of the links above
        no longer work, please <a href="#">let us know.</a>
      </PBottom>
    </DivLeft>
  );
};
