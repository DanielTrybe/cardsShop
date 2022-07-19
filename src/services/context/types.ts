export type DataCards = {
  id: string;
  name: string;
  supertype: string;
  subtypes: Array<string>;
  level: string;
  hp: string;
  types: Array<string>;
  evolvesFrom: string;
  abilities: Array<{
    name: string;
    text: string;
    type: string;
  }>;
  attacks: Array<{
    name: string;
    cost: Array<string>;
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }>;
  weaknesses: Array<{
    type: string;
    value: string;
  }>;

  resistances: Array<{
    type: string;
    value: string;
  }>;
  retreatCost: Array<string>;
  convertedRetreatCost: number;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
      unlimited: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: Array<number>;
  legalities: {
    unlimited: string;
  };
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
      reverseHolofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
      };
    };
  };
  cardmarket: {
    url: string;
    updatedAt: string;
    prices: {
      averageSellPrice: number;
      lowPrice: number;
      trendPrice: number;
      reverseHoloLow: number;
      reverseHoloTrend: number;
      lowPriceExPlus: number;
      avg1: number;
      avg7: number;
      avg30: number;
      reverseHoloAvg1: number;
      reverseHoloAvg7: number;
      reverseHoloAvg30: number;
    };
  };
};

export type CardList = {
  count: number;
  data: Array<DataCards>;
  page: number;
  pageSize: number;
  totalCount: number;
};

export type Card = {
  card: DataCards;
  children?: JSX.Element;
};

export interface CardsContextProps {
  cardsList: CardList;
  getOneCard: (card: number) => void;
  search: string;
  setSearch: (value: string) => void;
  card: any;
}
