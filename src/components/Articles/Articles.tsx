import { ArticleInput } from "./ArticleInput";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { OneArticle } from "./OneArticle";
import { articlesTheme } from "./articles.theme";
import { theme } from "../../theme";
import { useLocalStorage } from "./localStorageHook";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const DivHeader = styled.div`
  width: 30%;
  border-radius: 5%;
  overflow: hidden;
  font-weight: 700;
  margin: 2em auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: ${articlesTheme.boxShadowHeader1} 0px 0px 0px 2px,
    ${articlesTheme.boxShadowHeader2} 0px 4px 6px -1px,
    ${articlesTheme.boxShadowHeader3} 0px 1px 0px inset;
  @media (${theme.width800}) {
    width: 80%;
  }
`;
const DivAll = styled.div`
  display: flex;
  justify-content: center;
`;
const LinkToAll = styled(Link)`
  text-align: center;
  padding: 0.5em 1.5em;
  border-radius: 10px;
  background: ${theme.white};
  margin-top: 0.4em;
  margin-bottom: 2em;
  color: ${theme.brown};
  text-decoration: none;
  border: 2px solid ${theme.brown};
`;
const LinkHeader = styled(Link)`
  text-align: center;
  width: 100%;
  display: block;
  text-decoration: none;
  padding: 1.5em 2em;
  color: ${theme.black};

  :hover {
    background: ${theme.white};
  }
  @media (${theme.width800}) {
    font-size: 0.7em;
  }
  @media (${theme.width400}) {
    padding: 1em 0;
  }
`;

const DivFlex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  @media (${theme.width1000}) {
    display: block;
  }
`;

type ArticlesContext = {
  newArticle: {
    header: string;
    slug: string;
    text: string;
  };
  setNewArticle: React.Dispatch<
    React.SetStateAction<{
      header: string;
      slug: string;
      text: string;
    }>
  >;

  handleSubmit: () => void;
};
const getEmptyArticle = () => ({
  header: "",
  slug: "",
  text: "",
});

const ARTICLE_KEY = "Articles";
export const ArticlesContext = React.createContext<ArticlesContext>(
  null as any
);

export const Articles = () => {
  const match = useRouteMatch();
  const [newArticle, setNewArticle] = useState({
    header: "",
    slug: "",
    text: "",
  });

  const [articles, setArticles] = useLocalStorage(ARTICLE_KEY, []);

  const handleSubmit = () => {
    let include = false;
    const filterArrayElementByEdit = (
      array: {
        header: "";
        slug: "";
        text: "";
      }[]
    ) => array.filter((element) => element.slug === newArticle.slug);

    const numberOfDuplicates = filterArrayElementByEdit(articles).length;
    if (numberOfDuplicates === 1) {
      include = true;
      alert("Please choose different slug, this one already exists.");
    }
    if (
      newArticle.text.length > 0 &&
      newArticle.text.length > 0 &&
      newArticle.text.length > 0 &&
      include === false
    ) {
      setArticles((prev) => [newArticle, ...prev]);
      setNewArticle(getEmptyArticle());
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ArticlesContext.Provider
      value={{ newArticle, setNewArticle, handleSubmit }}
    >
      <Router>
        <DivHeader>
          <LinkHeader to={`${match.url}/new-article`} exact>
            Add Article
          </LinkHeader>
        </DivHeader>
        <Switch>
          <Route path={match.path} exact>
            <DivFlex>
              {articles.map((article, index) => (
                <Link
                  to={`${match.url}/${article.slug}`}
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <OneArticle
                    key={index}
                    text={article.text}
                    header={article.header}
                  />
                </Link>
              ))}
            </DivFlex>
          </Route>

          <Route path={`${match.url}/new-article`}>
            <DivAll>
              <LinkToAll to={match.path} exact>
                All Articles
              </LinkToAll>
            </DivAll>

            <ArticleInput />
          </Route>
          {articles.map((article, index) => (
            <Route key={index} path={`${match.url}/${article.slug}`}>
              <DivAll>
                <LinkToAll to={match.path} exact>
                  All Articles
                </LinkToAll>
              </DivAll>

              <OneArticle
                key={index}
                text={article.text}
                header={article.header}
              />
            </Route>
          ))}
        </Switch>
      </Router>
    </ArticlesContext.Provider>
  );
};
