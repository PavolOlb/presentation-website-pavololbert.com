import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { MainChuck } from "./MainComponent";
import { config } from "./appConfig";
import { delay } from "./timeUtils";
import { theme } from "../../theme";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

export type JokeTypes = {
  categories: [];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

type ContextTypes = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  jokesUrl: {
    url: string;
    path: string;
  };
  catLoading: boolean;
  errorState: boolean;
  setErrorState: React.Dispatch<React.SetStateAction<boolean>>;
  choosingOption: boolean;
  setChoosingOption: React.Dispatch<React.SetStateAction<boolean>>;
};

export const JokesContext = React.createContext<ContextTypes>(null as any);
export const ChuckNorris = () => {
  const [errorState, setErrorState] = useState(false);
  const [choosingOption, setChoosingOption] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [catLoading, setcatLoading] = useState(false);

  const isJokeDuplicated = (filteredArray: JokeTypes[], data: JokeTypes) =>
    filteredArray.filter((e) => e.id === data.id).length;

  React.useEffect(() => {
    const categoriesFetch = async () => {
      setcatLoading(true);
      try {
        const response = await fetch(config.listOfCategoriesUrl);
        const data = await response.json();
        setCategories(data);
      } catch {
        setErrorState(true);
      } finally {
        setcatLoading(false);
      }
    };
    categoriesFetch();
  }, []);
  const jokesUrl = useRouteMatch<{}>();
  return (
    <JokesContext.Provider
      value={{
        categories,
        setCategories,
        catLoading,
        errorState,
        setErrorState,
        jokesUrl,
        choosingOption,
        setChoosingOption,
      }}
    >
      <MainChuck />
    </JokesContext.Provider>
  );
};
