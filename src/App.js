import { Board } from "./components/Board/Board";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";

import "./scss/app.scss";

export const App = () => {
  return (
    <Container>
      <Header />
       <h1 className="title__app">Hello Evano 👋🏼,</h1>
      <Board /> 
    </Container>
  );
};
