import { CategoryNavigation } from "./Navigation";
import { Joke } from "./JokeTemplate";
import { JokesContext } from "./LogicComponent";
import { JokesTemplate } from "./CategoryJokesTemplate";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { theme } from "../../theme";
import React, { useContext, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

const DivFlex = styled.div`
  display: flex;
  width: 100%;
  @media (${theme.width800}) {
    flex-direction: column-reverse;
  }
`;
const DivOption = styled.div`
  display: none;
  width: 40%;
  text-align: center;
  margin: 0 auto;
  padding: 0.5em 1em;
  border-radius: 10px;
  background: ${theme.white};
  cursor: pointer;
  margin: 0.5em;
  color: ${theme.brown};
  border: 2px solid ${theme.brown};
  @media (${theme.width800}) {
    display: block;
    margin: 0 auto;
  }
`;
const H1TheFirst = styled.h1`
  font-size: 3em;
  font-weight: ${theme.tinyFont};
  margin: 0.5em 0;
  text-align: center;
  color: ${theme.brown};
`;
const H3Styled = styled.h3`
  font-size: 2em;
  text-align: center;
  font-weight: ${theme.tinyFont};
  margin: 0;
  color: ${theme.black};
  margin-bottom: 1em;
`;
const DivRightPart = styled.div`
  width: 100%;
`;

export const MainChuck = () => {
  const jokesContext = useContext(JokesContext);

  const jokesSite = useRouteMatch();
  return (
    <DivFlex>
      <Router>
        <CategoryNavigation />
        <DivRightPart>
          <H1TheFirst>Chuck Norris Jokes To Make You Laugh</H1TheFirst>
          <H3Styled>But Please Don{"'"}t Tell Chuck Norris</H3Styled>
          <DivOption onClick={() => jokesContext.setChoosingOption((p) => !p)}>
            Choose Category
            <i className="fas fa-cog"></i>
          </DivOption>
          <Switch>
            <Route path={jokesSite.path} exact>
              <DivRightPart>
                <JokesTemplate category="All" />
              </DivRightPart>
            </Route>
            {jokesContext.categories.map((category, index) => (
              <Route key={index} path={`${jokesSite.url}/${category}`}>
                <JokesTemplate category={category} />
              </Route>
            ))}
          </Switch>
        </DivRightPart>
      </Router>
    </DivFlex>
  );
};
