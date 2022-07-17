import { Card } from "services/context/types";

function AccordionCard({ card }: Card) {
  return <h1>{card.name}</h1>;
}

export default AccordionCard;
