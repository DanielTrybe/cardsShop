import React, { createContext, useEffect, useState } from "react";
import api from "../api/api";

interface CardsContextProps {
  cardsList: any;
}

export const CardsContext = createContext<CardsContextProps | null>(null);

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsList, setCardsList] = useState([] as any);

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await api.get("cards");
        setCardsList(response.data);
      } catch {
        console.log("deuruim");
      }
    };
    getCards();
  }, []);

  const values = {
    cardsList,
  };
  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
