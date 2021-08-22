import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { portfTheme } from "./portfolio.theme";
import { theme } from "../../theme";
import React from "react";
import styled from "styled-components";

const DivOneProject = styled.div`
  width: 30%;
  border-radius: 5%;
  padding: 1em 0.5em;
  margin: 0;
  text-align: center;
  background: ${theme.white};
  cursor: default;
  margin-bottom: 2em;
  box-shadow: ${portfTheme.oneProjectBoxShadow1} 0px 6px 12px -2px,
    ${portfTheme.oneProjectBoxShadow2} 0px 3px 7px -3px;
  :hover {
    box-shadow: ${theme.brown} 0px 0px 0px 2px, ${theme.brown} 0px 4px 6px -1px,
      ${portfTheme.oneProjectHoverShadow} 0px 1px 0px inset;
  }
  @media (${theme.width1000}) {
    width: 100%;
  }
`;
const H3ProjectHeader = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 3em;
`;

const LinkToProject = styled(Link)`
  display: inline-block;
  border: 1px solid ${theme.brown};
  padding: 0.5em 1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  color: ${theme.brown};
  font-weight: 700;
  border-radius: 10%;
  text-decoration: none;
  transition: 0.2s all ease-out;
  :hover {
    background: ${theme.brown};
    color: ${theme.white};
  }
`;
const PWithDescription = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  margin: 2em auto;
  width: 80%;
`;

type Props = {
  header: string;
  description: string;
  urlToProject: string;
};
export const OneProject = (props: Props) => {
  return (
    <DivOneProject>
      <H3ProjectHeader>{props.header}</H3ProjectHeader>
      <PWithDescription>{props.description}</PWithDescription>
      <LinkToProject to={props.urlToProject}>Check The Project</LinkToProject>
    </DivOneProject>
  );
};
