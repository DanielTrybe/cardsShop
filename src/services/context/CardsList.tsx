import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

type CardList = {
  count: number;
  data: Array<any>;
  page: number;
  pageSize: number;
  totalCount: number;
};

interface CardsContextProps {
  cardsList: CardList;
  getOneCard: (card: number) => void;
  search: string;
  setSearch: (value: string) => void;
  card: any;
}

export const CardsContext = createContext({} as CardsContextProps);

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsList, setCardsList] = useState({} as CardList);
  const [card, setCard] = useState({} as any);
  const [search, setSearch] = useState("" as string);

  const getOneCard = async (cardID: number) => {
    try {
      const response = await api.get(`cards/${cardID}`);
      setCard(response.data);
    } catch {
      console.log("erro ao buscar carta");
    }
  };

  const getCards = async () => {
    try {
      const response = await api.get("cards");
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
