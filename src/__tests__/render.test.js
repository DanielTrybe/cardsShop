import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("1 - Crie uma página de listagem de produtos", () => {
  it("A raiz da aplicação, em `<App />`, renderiza com sucesso", () => {
    render(<App />);
  });

  it(`A tela contém o campo de busca'`, () => {
    render(<App />);
    expect(screen.getByTestId("header-input")).toBeInTheDocument();
  });

  it(`A tela contém o botão de busca`, () => {
    render(<App />);
    expect(screen.getByTestId("header-btn")).toBeInTheDocument();
  });

  it(`A tela contém o logo Pokemon`, () => {
    render(<App />);
    expect(screen.getByTestId("header-logo")).toBeInTheDocument();
  });
});

// proximos testes cards
