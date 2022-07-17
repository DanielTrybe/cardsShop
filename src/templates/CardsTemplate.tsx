import { Grid, Box } from "@mui/material";
import { useCardsContext } from "hooks";

function CardsTemplate() {
  const { cardsList } = useCardsContext();
  return (
    <Grid>
      {cardsList.data.length > 0 ? (
        cardsList.data.map((card) => <p>{card.name}</p>)
      ) : (
        <p>procure um card</p>
      )}
    </Grid>
  );
}

export default CardsTemplate;
