import { Joke } from "./JokeTemplate";
import { JokesContext } from "./LogicComponent";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { chuckTheme } from "./chuck.theme";
import { theme } from "../../theme";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const DivNavigation = styled.div<{ displaying }>`
  z-index: 300;
  background: ${theme.white};
  border-radius: 5%;
  overflow: hidden;
  border: 1px solid ${theme.brown};
  width: 100%;
  margin: 5em 1em;
  box-shadow: ${chuckTheme.navDeskBoxShadow1} 0px 1px 3px 0px,
    ${chuckTheme.navDeskBoxShadow2} 0px 0px 0px 1px;
  max-height: 60em;
  @media (${theme.width800}) {
    position: absolute;
    top: 100px;
    left: 10%;
    width: 80%;
    display: ${(p) => (p.displaying ? "flex" : "none")};
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    border: none;
    box-shadow: ${chuckTheme.navMobBoxShadow1} 0px 0px 0px 1px,
      ${chuckTheme.navMobBoxShadow2} 0px 0px 0px 1px inset;
  }
`;

const LinkNavigation = styled(Link)`
  color: ${theme.black};
  font-weight: ${theme.mediumFont};
  text-decoration: none;
  :hover {
    color: ${theme.brown};
  }
  @media (${theme.width800}) {
    min-width: 25%;
    background: none;
    color: ${theme.brown};
    border: 1px solid ${theme.brown};
    border-radius: 10px;
    margin: 0.5em 0.5em;
    :hover {
      color: ${theme.white};
      background: ${theme.brown};
    }
  }
`;
const DivOneRoute = styled.div`
  text-transform: capitalize;
  text-align: center;
  width: 100%;
  padding: 1em 1em;
  cursor: pointer;
  border-bottom: 1px solid ${theme.lightGrey};
  :hover {
    box-shadow: ${chuckTheme.oneRouteBoxShadow} 0px 0px 0px 1px;
  }
  @media (${theme.width800}) {
    border-bottom: none;
    padding: 0.3em 1em;
  }
`;
const IClosing = styled.i`
  position: absolute;
  font-size: 1.5em;
  cursor: pointer;
  display: none !important;
  color: ${theme.lightGrey};
  top: 15px;
  right: 15px;
  @media (${theme.width800}) {
    display: block !important;
  }
`;
const DivCategories = styled.div`
  text-transform: capitalize;
  text-align: center;
  cursor: default;
  background: ${theme.darkerGrey};
  font-weight: ${theme.boldFont};
  width: 100%;
  padding: 1em 1em;
  border-bottom: 1px solid ${theme.brown};
  @media (${theme.width800}) {
    background: none;
    font-size: 2em;
    color: ${theme.black};
    border-bottom: none;
  }
`;
const DivModalBackground = styled.div<{ displaying; ref }>`
  width: 30%;
  @media (${theme.width800}) {
    z-index: 100;
    height: 100%;
    width: 100%;
    position: fixed;
    display: ${(p) => (p.displaying ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: ${chuckTheme.modalBackground};
  }
`;

export const CategoryNavigation = () => {
  const jokesContext = useContext(JokesContext);
  const modalBackground = React.useRef();

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (modalBackground.current === e.target) {
      jokesContext.setChoosingOption(false);
    }
  };
  const handleKey = (e: KeyboardEvent) => {
    if (
      e.key === "CapsLock" ||
      (e.key === "Escape" && jokesContext.choosingOption)
    ) {
      jokesContext.setChoosingOption(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });
  return (
    <DivModalBackground
      ref={modalBackground}
      displaying={jokesContext.choosingOption}
      onClick={closeModal}
    >
      <DivNavigation displaying={jokesContext.choosingOption}>
        <DivCategories>Choose your CATEGORY</DivCategories>
        <IClosing
          className="far fa-times-circle"
          onClick={() => jokesContext.setChoosingOption(false)}
        />
        <LinkNavigation
          to={`${jokesContext.jokesUrl.path}`}
          onClick={() => jokesContext.setChoosingOption(false)}
        >
          <DivOneRoute>All</DivOneRoute>
        </LinkNavigation>
        {jokesContext.catLoading && <DivOneRoute>Loading</DivOneRoute>}
        {jokesContext.categories.map((category, index) => (
          <LinkNavigation
            to={`${jokesContext.jokesUrl.path}/${category}`}
            key={index}
            onClick={() => jokesContext.setChoosingOption(false)}
          >
            <DivOneRoute onClick={() => window.scrollTo(0, 0)}>
              {category}
            </DivOneRoute>
          </LinkNavigation>
        ))}
      </DivNavigation>
    </DivModalBackground>
  );
};
