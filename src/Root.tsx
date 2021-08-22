import { AboutMe } from "./components/AboutMe";
import { Articles } from "./components/Articles/Articles";
import { ChuckNorris } from "./components/ChuckNorris/LogicComponent";
import { Contact } from "./components/Contact";
import { CounterApp } from "./components/Counter/CounterIndex";
import { HackerTyper } from "./components/Hackertyper/HackerTyper";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MemoryGame } from "./components/MemoryGame/MemoryGame";
import { MyHeader } from "./components/Header";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { TheGame } from "./components/TicTacToe/TicTacToe";
import { ToDoList } from "./components/Todolist/ToDoList";
import { WelcomePage } from "./components/WelcomePage";
import React from "react";
import styled from "styled-components";
export const Components = () => {
  return (
    <Router>
      <MyHeader />

      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>

        <Route path="/counter">
          <CounterApp />
        </Route>
        <Route path="/hackertyper">
          <HackerTyper />
        </Route>
        <Route path="/TicTacToe">
          <TheGame />
        </Route>

        <Route path="/todolist">
          <ToDoList />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/memorygame">
          <MemoryGame />
        </Route>
        <Route path="/chucknorris">
          <ChuckNorris />
        </Route>
      </Switch>
    </Router>
  );
};
