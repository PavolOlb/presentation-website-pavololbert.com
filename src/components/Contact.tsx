import { theme } from "../theme";
import styled from "styled-components";
const Div100 = styled.div`
  min-height: 93.5%;
  font-family: "Amatic SC", cursive;
  background: ${theme.white};
  color: ${theme.brown};
  font-size: 3em;
  white-space: pre-wrap;
  padding-bottom: 3em;
  @media (${theme.width400}) {
    font-size: 2em;
  }
`;
const DivContact = styled.div`
  font-size: 0.8em;
`;
const H1Home = styled.h1`
  padding: 0.5em 1em;
  margin: 0;
  color: ${theme.brown};
  text-align: center;
  @media (${theme.width530}) {
    padding: 0.5em 0;
  }
`;
const PHome = styled.p`
  margin: 0;
  font-size: 0.7em;
`;
const AHome = styled.a`
  margin: 0;
  font-size: 1em;
  color: ${theme.brown};
  text-decoration: none;
  @media (${theme.width1000}) {
    display: block;
    margin-bottom: 0.5em;
  }
`;
const ASocial = styled.a`
  margin: 0;
  font-size: 0.7em;
  color: ${theme.brown};
  text-decoration: none;
  display: block;
  :hover {
    text-decoration: underline;
  }
`;
const DivContactInfos = styled.div`
  box-shadow: ${theme.contactShadow} 0px 20px 30px -10px;
  border-radius: 5%;
  padding: 1em;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  @media (${theme.width1000}) {
    width: 90%;
    margin: 0 0.3em;
  }
`;
const H3Contact = styled.h3`
  margin: 0.2em;
`;
export const Contact = () => {
  return (
    <Div100>
      <H1Home>Feel free to contact me:</H1Home>
      <DivContactInfos>
        <H3Contact>Main contact</H3Contact>

        <PHome>
          Telephone number:{" "}
          <AHome href="tel: +421 948 722 883">+421 948 722 883</AHome>
        </PHome>
        <PHome>
          E-mail adress:
          <AHome href="mailto: pavol.olbert@pavololbert.com">
            pavol.olbert@pavololbert.com
          </AHome>
        </PHome>
        <hr />
        <H3Contact>Social media</H3Contact>

        <ASocial
          href="https://sk.linkedin.com/in/pavol-olbert"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </ASocial>

        <ASocial
          href="https://www.facebook.com/olbert.pavol"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </ASocial>
      </DivContactInfos>
    </Div100>
  );
};
