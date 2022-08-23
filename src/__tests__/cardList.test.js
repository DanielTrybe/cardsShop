import React from "react";

import { render, screen } from "@testing-library/react";

import App from "../App";

describe("1 - Verifica se existe cards ao carregar a página", () => {
  it(`A tela contém um card'`, () => {
    render(<App />);
    expect(screen.getByTestId("card-1")).toBeInTheDocument();
  });

  it(`A tela contém 10 cards'`, () => {
    render(<App />);
    expect(screen.getByTestId("card-1")).toBeInTheDocument();
    expect(screen.getByTestId("card-2")).toBeInTheDocument();
    expect(screen.getByTestId("card-3")).toBeInTheDocument();
    expect(screen.getByTestId("card-4")).toBeInTheDocument();
    expect(screen.getByTestId("card-5")).toBeInTheDocument();
    expect(screen.getByTestId("card-6")).toBeInTheDocument();
    expect(screen.getByTestId("card-7")).toBeInTheDocument();
    expect(screen.getByTestId("card-8")).toBeInTheDocument();
    expect(screen.getByTestId("card-9")).toBeInTheDocument();
    expect(screen.getByTestId("card-10")).toBeInTheDocument();
  });

  it(`O primeiro card contém os dados solicitados'`, () => {
    render(<App />);
    expect(screen.getByTestId("card-1")).toBeInTheDocument();
    expect(screen.getByTestId("card-name")).toBeInTheDocument();
    expect(screen.getByTestId("card-attacks")).toBeInTheDocument();
    expect(screen.getByTestId("card-type")).toBeInTheDocument();
  });
});

// testes de click e um card mais a frente
