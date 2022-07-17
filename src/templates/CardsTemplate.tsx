import { Grid, Box } from "@mui/material";
import { useCardsContext } from "hooks";
import { AccordionCard } from "components/Items";

function CardsTemplate() {
  const { cardsList } = useCardsContext();
  return (
    <Grid>
      {cardsList?.data?.length > 0 ? (
        cardsList.data.map((card, index) => (
          <AccordionCard key={index} card={card} />
        ))
      ) : (
        <p>procure um card</p>
      )}
    </Grid>
  );
}

export default CardsTemplate;
