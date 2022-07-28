import { Grid } from "@mui/material";
import { useCardsContext } from "hooks";
import { CardShow } from "components/Items";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "center",
    gap: 10,
    padding: 5,
    marginTop: 5,
  },
});

// criar icones e colocar nos ataques

function CardsTemplate() {
  const classes = useStyles();
  const { cardsList, loading } = useCardsContext();

  return (
    <Grid className={classes.cards}>
      {loading ? (
        <p>carregando...</p>
      ) : cardsList?.data?.length > 0 ? (
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
