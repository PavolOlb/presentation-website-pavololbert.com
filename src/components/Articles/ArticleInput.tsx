import { ArticlesContext } from "./Articles";
import { theme } from "../../theme";
import React, { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const DivArticle = styled.div`
  display: flex;
  justify-content: center;
  @media (${theme.width800}) {
    width: 70%;
    margin: 0 auto;
  }
`;
const TeaxtareaInput = styled.textarea`
  border: 2px solid ${theme.brown};
  resize: none;
  padding: 0.5em 1em;
  @media (${theme.width400}) {
    width: 100%;
    height: 40%;
  }
`;
const InputStyled = styled.input`
  padding: 0.5em 1em;
  display: block;
  border: 2px solid ${theme.brown};
  margin-bottom: 1em;
`;
const InputSubmit = styled.input`
  border-radius: 10%;
  font-weight: 700;
  display: block;
  border: 2px solid ${theme.brown};
  margin-top: 1em !important;
  padding: 1em 2em;
  background: ${theme.white};
  margin: 0 auto;
  :hover {
    background: ${theme.red};
    color: ${theme.white};
    cursor: pointer;
  }
`;

// Inspiration: https://gist.github.com/codeguy/6684588
const stringToSlug = (str: string) =>
  str
    .replace(/^\s+|\s+$/g, "-")
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
export const ArticleInput = () => {
  const articlesContext = useContext(ArticlesContext);

  return (
    <DivArticle>
      <form>
        <InputStyled
          type="text"
          autoFocus
          placeholder="Article Header"
          value={articlesContext.newArticle.header}
          onChange={(event) => {
            articlesContext.setNewArticle((prevState) => ({
              ...prevState,
              header: event.target.value,
            }));
          }}
        />
        <InputStyled
          type="text"
          placeholder="Article Slug"
          value={articlesContext.newArticle.slug}
          onChange={(event) => {
            articlesContext.setNewArticle((prevState) => ({
              ...prevState,
              slug: stringToSlug(event.target.value),
            }));
          }}
        />
        <TeaxtareaInput
          rows={20}
          cols={50}
          placeholder="Article text"
          value={articlesContext.newArticle.text}
          onChange={(event) => {
            articlesContext.setNewArticle((prevState) => ({
              ...prevState,
              text: event.target.value,
            }));
          }}
        />
        <InputSubmit
          type="submit"
          value="Add article"
          onClick={(e) => {
            e.preventDefault();
            articlesContext.handleSubmit();
          }}
        />
      </form>
    </DivArticle>
  );
};
