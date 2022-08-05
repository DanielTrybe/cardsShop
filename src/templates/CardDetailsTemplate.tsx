import { useEffect } from "react";
import { useCardDetailsContext } from "hooks";
import { Typography, Grid, Paper, Box } from "@mui/material";

type CardID = {
  cardId: string;
};

function CardDetailsTemplate({ cardId }: CardID) {
  const { getOneCard, cardDetail, loading } = useCardDetailsContext();

  useEffect(() => {
    getOneCard(cardId);
  }, []);

  return (
    <Grid>
      {loading ? (
        <p>carregando</p>
      ) : (
        <Grid>
          <Box>
            <Typography>{cardDetail?.name}</Typography>
            <img src={cardDetail?.images?.large} alt={cardDetail.name} />
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default CardDetailsTemplate;
