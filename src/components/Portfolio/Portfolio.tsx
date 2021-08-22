import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { OneProject } from "./OneProject";
import { myProjects } from "./Projects";
import { theme } from "../../theme";
import React from "react";
import styled from "styled-components";
const Div100 = styled.div`
  min-height: 93.5%;
  background: ${theme.white};
  color: ${theme.black};
  padding: 2em 2em;
  font-family: "Amatic SC", cursive;
`;

const H1TheFirst = styled.h1`
  width: 100%;
  font-size: 5em;
  font-weight: ${theme.tinyFont};
  margin: 0.5em;
  padding: 0;
  text-align: center;
  color: ${theme.brown};
  @media (${theme.width1000}) {
    font-size: 4em;
    margin: 0;
    margin-bottom: 0.5em;
  }
`;
const DivFlexProjects = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Portfolio = () => {
  return (
    <Div100>
      <H1TheFirst>Here is my portolio of ReactJS apps</H1TheFirst>
      <DivFlexProjects>
        {myProjects.map((item, index) => {
          return (
            <OneProject
              key={index}
              header={item.Title}
              description={item.Description}
              urlToProject={item.UrlToProject}
            />
          );
        })}
      </DivFlexProjects>
    </Div100>
  );
};
