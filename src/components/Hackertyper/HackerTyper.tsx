import { theme } from "../../theme";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
//@ts-ignore
import textfile from "./mytext.txt";

const Div100 = styled.div`
  min-height: 100%;
  background: ${theme.black};
  color: ${theme.lightGreen};
  font-family: monospace;
  padding: 0em 2em;
  white-space: pre-wrap;
  display: flex;
`;

const DivAccess = styled.div<{ displaying: number; color: string }>`
  border: 3px solid
    ${(p) => (p.color === "green" ? `${theme.lightGreen}` : `${theme.red}`)};
  display: inline;
  padding: 2em;
  color: ${(p) =>
    p.color === "green" ? `${theme.lightGreen}` : `${theme.red}`};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 700;
  display: ${(p) => (p.displaying > 2 ? "block" : "none")};
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
const mobileCheck = `/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
navigator.userAgent
        )`;

export const HackerTyper = () => {
  const [myText, setMyText] = useState("");
  const [successCount, setsuccessCount] = useState(0);
  const [deniedCount, setdeniedCount] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const Chars_Per_Stroke = 5;
  const key = {
    esc: 27,
    alt: 18,
    backspace: 8,
    caps: 20,
  };

  const updateCodeplus = () => {
    setEndIndex((prevEndIndex) => prevEndIndex + Chars_Per_Stroke);
  };
  const updateCodeminus = () => {
    setEndIndex((prevEndIndex) => prevEndIndex - Chars_Per_Stroke);
  };
  const handleKey = (event: KeyboardEvent) => {
    if (
      event.which !== key.alt &&
      event.which !== key.backspace &&
      event.which !== key.caps
    ) {
      updateCodeplus();
    }
    if (event.which === key.backspace) {
      updateCodeminus();
    }
    if (event.which === key.alt) {
      setsuccessCount((prevsuccessCount) => prevsuccessCount + 1);
    }
    if (event.which === key.caps) {
      setdeniedCount((prevdeniedCount) => prevdeniedCount + 1);
    }
    if (event.which === key.esc) {
      setsuccessCount(0);
      setdeniedCount(0);
    }
  };
  const handleClick = () => {
    updateCodeplus();
  };
  React.useEffect(() => {
    fetch(textfile)
      .then((response) => response.text())
      .then((textContent) => {
        setMyText(textContent);
      });
    window.addEventListener("keydown", handleKey);
    if (mobileCheck) {
      // true for mobile device
      window.addEventListener("click", updateCodeplus);
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      if (mobileCheck) window.removeEventListener("click", updateCodeplus);
    };
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Div100>
      <p>{myText.substring(0, endIndex)}</p>
      <DivAccess displaying={successCount} color="green">
        Access Granted
      </DivAccess>
      <DivAccess displaying={deniedCount} color="red">
        Access Denied
      </DivAccess>
    </Div100>
  );
};
