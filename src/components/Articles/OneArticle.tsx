import { articlesTheme } from "./articles.theme";
import { theme } from "../../theme";
import React, { useContext, useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const DivArticle = styled.div`
  display: block;
  min-height: 300px;
  width: 25em;
  word-wrap: break-word;
  padding: 1em;
  margin: 1em auto;
  background: ${theme.white};
  box-shadow: ${articlesTheme.boxShadowArticle1} 0px 1px 3px,
    ${articlesTheme.boxShadowArticle2} 0px 1px 2px;
  border-radius: 5%;
  @media (${theme.width400}) {
    width: 80%;
  }
`;
const H1Styled = styled.h1`
  color: ${theme.brown}!important;
  margin: 0em;
  border: none;
`;
const DivStyled = styled.div`
  font-weight: ${theme.boldFont};
  color: ${theme.black}!important;
`;

type Props = {
  text: string;
  header: string;
};

export const OneArticle = (props: Props) => {
  return (
    <DivArticle>
      <H1Styled>{props.header}</H1Styled>
      <DivStyled>
        <ReactMarkdown>{props.text}</ReactMarkdown>
      </DivStyled>
    </DivArticle>
  );
};
