import { Joke } from "./JokeTemplate";
import { JokeTypes } from "./LogicComponent";
import { JokesContext } from "./LogicComponent";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import { config } from "./appConfig";
import { delay } from "./timeUtils";
import { isDuplicatedById } from "./arrayUtils";
import { theme } from "../../theme";
import ChuckThumbUp from "./images/chuckthumbup.gif";
import LoadingImage from "./images/loading.png";
import React, { useContext, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {opacity: 0},
50% {opacity: 1}
`;

const loadingAnimation = keyframes`
0% {transform: rotate(0deg)}
30% {transform: rotate(30deg)}
80% {transform: rotate(-30deg)}
100% {transform: rotate(0deg)} `;

const PCategory = styled.p`
  text-align: center;
  font-weight: ${theme.boldFont};
`;
const ImgChuck = styled.img`
  border-radius: 5%;
  display: block;
  margin: 1em auto;
`;
const DivCenter = styled.div`
  text-align: center;
  @media (${theme.width800}) {
    margin-bottom: 3em;
  }
`;
const SpanColor = styled.span`
  color: ${theme.red};
  text-transform: uppercase;
`;
const SpanLoading = styled.span`
  color: ${theme.black};
  font-weight: ${theme.boldFont};
  text-transform: uppercase;
`;
const ButtonAdd = styled.button`
  color: ${theme.black};
  border: 1px solid ${theme.brown};
  background: ${theme.white};
  cursor: pointer;
  padding: 1em;
  display: block;
  border-radius: 10%;
  font-weight: ${theme.boldFont};
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  animation: 2s ${fadeIn} ease-out;
  :hover {
    color: ${theme.brown};
  }
`;
const ErroDiv = styled.div`
  background: ${theme.red};
  animation: 1s ${fadeIn} ease-out;
  padding: 1em;
  color: ${theme.white};
  border-radius: 10%;
  font-weight: ${theme.boldFont};
  font-size: 3em;
  width: 10em;
  left: 50%;
  position: fixed;
  z-index: 100;
  display: inline-block;
`;
const DivLoading = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgLoading = styled.img`
  height: 3em;
  width: 3em;
  animation: 1s ${loadingAnimation} infinite;
  margin: 0 1em;
`;

type Props = {
  category: string;
};

export const JokesTemplate = (props: Props) => {
  const [categoryJokes, setCategoryJokes] = useState<JokeTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [chuckThumbUp, setchuckThumbUp] = useState(false);
  const [numberOfJokes, setNumberOfJokes] = useState(
    props.category === "All"
      ? config.numberOfRandomJokes
      : config.numberOfCategoryJokes
  );

  const jokeContext = useContext(JokesContext);
  const URL_FOR_FETCH =
    props.category === "All"
      ? config.randomJokeUrl
      : `${config.categoryJokeUrl}${props.category}`;
  const INCREASE_NUMBER =
    props.category === "All" ? config.addRandom : config.addCategory;

  React.useEffect(() => {
    const mainLogic = async () => {
      let jokes: JokeTypes[] = [];
      try {
        setLoading(true);

        for (let i = jokes.length; i < numberOfJokes; i++) {
          const response = await fetch(URL_FOR_FETCH);
          const data = await response.json();
          if (isDuplicatedById(jokes, data) < 1) jokes = [...jokes, data];
          setCategoryJokes(jokes);
        }
      } catch {
        jokeContext.setErrorState(true);
      } finally {
        setLoading(false);
      }
    };
    mainLogic();
  }, []);
  const increaseJokes = async () => {
    if (loading) return;

    setchuckThumbUp(true);
    setLoading(true);
    try {
      await delay(2300);
      setchuckThumbUp(false);
      //spread operator because of not using prevState and useEffect
      let jokes = [...categoryJokes];
      for (let i = jokes.length; i < numberOfJokes + INCREASE_NUMBER; i++) {
        const response = await fetch(URL_FOR_FETCH);
        const data = await response.json();
        if (isDuplicatedById(jokes, data) < 1) jokes = [...jokes, data];

        setCategoryJokes(jokes);
      }
    } catch {
      jokeContext.setErrorState(true);
    } finally {
      await delay(2300);
      setLoading(false);
      setNumberOfJokes((p) => p + INCREASE_NUMBER);
    }
  };

  const CategoryIsChoosen = () => (
    <PCategory>
      Here are {categoryJokes.length} jokes from category:{" "}
      <SpanColor>{props.category}</SpanColor>
    </PCategory>
  );
  const CategoryIsNotChoosen = () => (
    <div>
      <PCategory>
        Here are {categoryJokes.length} random jokes about Chuck
      </PCategory>
    </div>
  );
  return (
    <DivCenter>
      {props.category === "All" && <CategoryIsNotChoosen />}
      {props.category !== "All" && <CategoryIsChoosen />}
      {jokeContext.errorState === true && (
        <ErroDiv>An error occured. Please refresh the page</ErroDiv>
      )}
      {categoryJokes.length === numberOfJokes && (
        <ButtonAdd
          onClick={() => {
            increaseJokes();
          }}
        >
          Hey Chuck! Add please {INCREASE_NUMBER} more
        </ButtonAdd>
      )}
      {chuckThumbUp === true && <ImgChuck src={ChuckThumbUp} alt="" />}
      {categoryJokes.map((joke, index) => (
        <Joke key={index} icon_url={joke.icon_url} value={joke.value} />
      ))}
      {loading === true && (
        <DivLoading onClick={() => setLoading(false)}>
          <ImgLoading src={LoadingImage} alt="" />
          <SpanLoading>Loading</SpanLoading>{" "}
          <ImgLoading src={LoadingImage} alt="" />
        </DivLoading>
      )}
      {loading === false && (
        <DivLoading>
          <SpanLoading>
            Those are all the jokes with choosen options.
          </SpanLoading>{" "}
        </DivLoading>
      )}
    </DivCenter>
  );
};
