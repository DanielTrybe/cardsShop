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
  // .
  return (
    <Grid>
      {loading ? (
        <p>carregando</p>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          style={{ marginTop: 15 }}
        >
          <Box>
            <img src={cardDetail?.images?.large} alt={cardDetail.name} />
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems: "center",
              marginLeft: 15,
            }}
          >
            <Typography>Name: {cardDetail?.name}</Typography>
            <Typography>Evolves from: {cardDetail?.evolvesFrom}</Typography>
            <Typography>HP: {cardDetail?.hp}</Typography>
            <Typography>LVL: {cardDetail?.level}</Typography>
            <Typography>Rarity: {cardDetail?.rarity}</Typography>
            <Box style={{ marginTop: 15 }}>
              {cardDetail?.attacks?.map((attack) => (
                <Grid
                  style={{
                    marginTop: 15,
                    border: "1px solid black",
                    borderRadius: 5,
                    maxWidth: 800,
                    wordBreak: "break-word",
                  }}
                >
                  <Typography>{attack?.name}</Typography>
                  <Typography>{attack?.cost}</Typography>
                  <Typography>{attack.convertedEnergyCost}</Typography>
                  <Typography>{attack.damage}</Typography>
                  <Typography>{attack.text}</Typography>
                </Grid>
              ))}
            </Box>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default CardDetailsTemplate;
