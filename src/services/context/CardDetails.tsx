import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

import { CardsDetailsContextProps, DataCards } from "./types";

export const CardsDetailsContext = createContext(
  {} as CardsDetailsContextProps
);

const CardDetailsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardDetail, setCardDetail] = useState({} as DataCards);
  const [loading, setLoading] = useState(false);

  const getOneCard = async (cardID: string) => {
    setLoading(true);
    // busca um card
    try {
      const { data } = await api.get(`cards/${cardID}`);

      setCardDetail(data.data);
    } catch {
      console.log("erro ao buscar carta");
    } finally {
      setLoading(false);
    }
  };

  const values = { cardDetail, getOneCard, loading };

  return (
    <CardsDetailsContext.Provider value={values}>
      {children}
    </CardsDetailsContext.Provider>
  );
};

export default CardDetailsProvider;
