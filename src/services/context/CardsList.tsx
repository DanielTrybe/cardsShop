import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

import { CardsContextProps, CardList } from "./types";

export const CardsContext = createContext({} as CardsContextProps);

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsList, setCardsList] = useState({} as CardList);
  const [card, setCard] = useState({} as any);
  const [search, setSearch] = useState("" as string);

  const getOneCard = async (cardID: number) => {
    // busca um card
    try {
      const response = await api.get(`cards/${cardID}`);
      setCard(response.data);
    } catch {
      console.log("erro ao buscar carta");
    }
  };

  const getCards = async () => {
    // busca todas cardas com filtros
    try {
      const response = await api.get(`cards?pageSize=${10}`);
      setCardsList(response.data);
    } catch {
      console.log("erro ao buscar cartas");
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
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
