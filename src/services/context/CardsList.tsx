import React, { createContext, useEffect, useState, useContext } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

interface CardsContextProps {
  cardsList: Array<any>;
  search: string;
  setSearch: (value: string) => void;
}

export const CardsContext = createContext({} as CardsContextProps);

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsList, setCardsList] = useState<any[]>([]);
  const [search, setSearch] = useState("" as string);

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await api.get("cards");
        setCardsList(response.data);
      } catch {
        console.log("erro ao buscar cartas");
      }
    };
    getCards();
  }, []);

  const values = {
    cardsList,
    search,
    setSearch,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
