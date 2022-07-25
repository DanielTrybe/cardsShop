import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

import { CardsContextProps, CardList, PageAndSize } from "./types";

export const CardsContext = createContext({} as CardsContextProps);

const initialize = {
  page: 1,
  size: 10,
};

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsList, setCardsList] = useState({} as CardList);
  const [card, setCard] = useState({} as any);
  const [search, setSearch] = useState("" as string);
  const [pageAndSize, setPageAndSize] = useState(initialize as PageAndSize);
  const [loading, setLoading] = useState(false);

  const getOneCard = async (cardID: number) => {
    setLoading(true);
    // busca um card
    try {
      const response = await api.get(`cards/${cardID}`);
      setCard(response.data);
    } catch {
      console.log("erro ao buscar carta");
    } finally {
      setLoading(false);
    }
  };

  const getCards = async () => {
    setLoading(true);
    // busca todas cardas com filtros
    try {
      const response = await api.get(
        `cards?pageSize=${pageAndSize.size}&page=${pageAndSize.page}${
          search.length > 0 ? `&q=name:${search}*` : ""
        }`
      );

      setCardsList(response.data);
    } catch {
      console.log("erro ao buscar cartas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  const values = {
    cardsList,
    getOneCard,
    search,
    setSearch,
    card,
    getCards,
    loading,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
