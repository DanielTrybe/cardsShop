import { CardsTemplate } from "templates";
import CardsProvider from "services/context/CardsList";

function CardsPage() {
  return (
    <CardsProvider>
      <CardsTemplate />
    </CardsProvider>
  );
}

export default CardsPage;
