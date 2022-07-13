export interface CardsContextProps {
  cardsList: Array<any>;
  search: string;
  setSearch: (value: string) => void;
}