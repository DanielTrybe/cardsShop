import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('1 - Crie uma página de listagem de produtos', () => {
  it('A raiz da aplicação, em `<App />`, renderiza com sucesso', () => {
    render(<App />);
  });

  it(`A tela contém a mensagem pedida: 'Digite algum termo de pesquisa ou escolha uma
      categoria.'`, () => {
    render(<App />);
    expect(screen.getByTestId('header-input')).toBeInTheDocument();
  });
});