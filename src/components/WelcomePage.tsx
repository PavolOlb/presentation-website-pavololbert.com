import { theme } from "../theme";
import Button from "@material-ui/core/Button";
import FacePicture from "../images/facepicture.jpg";
import React, { useState } from "react";
import styled from "styled-components";
const Div100 = styled.div`
  min-height: 93.5%;
  font-family: "Amatic SC", cursive;
  background: ${theme.black};
  color: ${theme.white};
  font-size: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2em 2em;
  white-space: pre-wrap;
  @media (${theme.width760}) {
    display: block;
    padding: 0.5em 0em;
    text-align: center;
  }
  @media (${theme.width300}) {
    min-height: 0;
  }
`;
const DivContact = styled.div`
  font-size: 0.8em;
  @media (${theme.width1000}) {
    font-size: 0.5em;
  }
  @media (${theme.width400}) {
    width: 80%;
    margin: 0 auto;
  }
`;
const H1Home = styled.h1`
  margin: 0em;
  padding: 0;
  @media (${theme.width1000}) {
    text-align: center;
  }
  @media (${theme.width300}) {
    font-size: 0.7em;
  }
`;
const PHome = styled.p`
  margin: 0 auto;
  font-size: 0.7em;
  margin-bottom: 0.8em;
`;
const DivAbout = styled.div`
  max-width: 10em;

  @media (${theme.width1000}) {
    max-width: 100%;
    padding: 0 0.5em;
  }
  @media (${theme.width400}) {
    max-width: 80%;
    margin: 0 auto;
    padding: 0;
  }
  @media (${theme.width300}) {
    font-size: 0.7em;
  }
`;
const ImgStyled = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 3px solid ${theme.imgBorderColor};
  margin-right: 2em;
  @media (${theme.width1000}) {
    margin-right: 0;
  }
  @media (${theme.width400}) {
    width: 70%;
    height: auto;
  }
`;
export const WelcomePage = () => {
  return (
    <Div100>
      <ImgStyled src={FacePicture} alt="" />
      <DivAbout>
        <H1Home>Welcome!</H1Home>

        <PHome>
          My name is Pavol and I{"'"}m 21 years old frontend developer based in
          Bratislava. Currently, I{"'"}m working with technologies ReactJS,
          JavaScript, HTML and CSS.
        </PHome>
      </DivAbout>
      <DivContact>
        <H1Home>Feel free to contact me, I{"'"}m looking forward!</H1Home>
      </DivContact>
    </Div100>
  );
};
