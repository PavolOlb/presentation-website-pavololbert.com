import { theme } from "../theme";
//@ts-ignore
import Pdf from "../CV-Pavol-Olbert.pdf";
import styled from "styled-components";
const Div100 = styled.div`
  min-height: 93.5%;
  cursor: default;
  background: ${theme.black};
  color: ${theme.white};
  font-size: 3em;
  white-space: pre-wrap;
  @media (${theme.width400}) {
    font-size: 2em;
  } ;
`;
const DivAbout = styled.div`
  max-width: 50%;
  margin: 0 auto;
  @media (${theme.width1000}) {
    max-width: 100%;
    padding: 0.5em;
  }
`;
const H1Home = styled.h1`
  font-family: "Amatic SC", cursive;
  padding: 0em 0;
  margin: 0;
  text-align: center;
  :first-child {
    padding-top: 0.2em;
  }
  @media (${theme.width1000}) {
    :first-child {
      padding-top: 0.5em;
    }
  }
`;
const H3Skills = styled.h3`
  font-family: "Amatic SC", cursive;
  text-align: center;
  margin: 0;
  padding: 0;
  @media (${theme.width1000}) {
    font-size: 0.8em;
  }
`;
const PAbout = styled.p`
  margin: 0;
  font-size: 0.4em;
`;
const DivA = styled.div`
  width: 30%;
  margin: 1em auto;
  padding-bottom: 1em;
  @media (${theme.width1000}) {
    width: 60%;
  }
`;
const ASocial = styled.a`
  text-align: center;
  margin: 0;
  font-family: "Amatic SC", cursive;
  padding: 0.5em 0.5em;
  border-radius: 5%;
  border: 1px solid ${theme.white};
  font-size: 0.7em;
  color: ${theme.white};
  text-decoration: none;
  display: block;

  :hover {
    text-decoration: underline;
  }
`;
export const AboutMe = () => {
  return (
    <Div100>
      <H1Home>Quick summary</H1Home>
      <DivAbout>
        <PAbout>
          At first, thank you for visiting my website. My name is Pavol Olbert,
          I{"'"}m 21 years old Fronted developer from Bratislava. I have
          finished grammar school, where I had a little experience with
          programming and then I decided to continue with studies via external
          form of study on Comenius University of Management. My first touch
          with web development took place when I was approximately 13 years old.
          I decided to go deeper and learn web technologies since the beginning
          of 2021. I have completed th course {'"'}IT-absolvent{'"'}, which
          started my journey of developing Single Page Applications based on
          ReactJS technology.
        </PAbout>
        <hr />
      </DivAbout>
      <H1Home>Skills</H1Home>
      <DivAbout>
        <H3Skills>ReactJS, TypeScript, HTML, CSS, GIT</H3Skills>
        <hr />
        <H1Home>Language Skills</H1Home>
        <H3Skills>English language - C1</H3Skills>
        <H3Skills>German language - A1</H3Skills>
        <hr />
        <H3Skills>For more information download my CV</H3Skills>

        <DivA>
          <ASocial href={Pdf} target="_blank" rel="noreferrer">
            Download Pdf
          </ASocial>
        </DivA>
      </DivAbout>
    </Div100>
  );
};
