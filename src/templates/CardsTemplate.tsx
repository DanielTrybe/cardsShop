import { Grid, Box } from "@mui/material";
import { useCardsContext } from "hooks";
import { CardShow } from "components/Items";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 5,
  },
});

function CardsTemplate() {
  const classes = useStyles();
  const { cardsList } = useCardsContext();
  return (
    <Grid className={classes.cards}>
      {cardsList?.data?.length > 0 ? (
        cardsList.data.map((card, index) => (
          <Grid>
            <CardShow key={index} card={card} />
          </Grid>
        ))
      ) : (
        <p>procure um card</p>
      )}
    </Grid>
  );
}

export default CardsTemplate;
