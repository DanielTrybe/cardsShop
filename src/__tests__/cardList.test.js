import React from "react";
import mockedCategoriesResult from "../__mocks__/cardList";
import { render, waitFor } from "@testing-library/react";
import { CardsContext } from "services/context/CardsList";
import App from "../App";

describe("1 - Verifica se existe cards ao carregar a página", () => {
  const getCards = CardsContext.it(
    "Implementa a função `getCategories`",
    () => {
      const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(mockedCategoriesResult),
      });

      jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

      return getCards().then((_cards) => {
        expect(global.fetch).toHaveBeenCalled();
        expect(global.fetch).toHaveBeenCalledWith(
          "https://api.pokemontcg.io/v2/cards?pageSize=10&page=1"
        );
        expect(cardsList).toEqual(mockedCategoriesResult);
      });
    }
  );
});
