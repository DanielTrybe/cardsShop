import {
  Typography,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

import { Card as CardType } from "services/context/types";
import { PopoverCustom } from "components/Items";

function CompactCard({ card }: CardType) {
  const navigate = useNavigate();
  const content = (
    <Typography style={{ padding: 5 }}>
      {card.attacks.map((attack) => (
        <Grid
          style={{
            border: "1px solid lightgray",
            borderRadius: 5,
            marginBottom: 5,
          }}
        >
          <Typography sx={{ p: 1 }}>
            {attack.name} -{" "}
            {attack.cost.map((cost) => (
              <span>{cost} </span>
            ))}{" "}
            {attack.damage ? `- ${attack.damage}` : ""}
          </Typography>

          <Typography sx={{ p: 1 }}>{attack.text}</Typography>
        </Grid>
      ))}
    </Typography>
  );

  return (
    <Paper elevation={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton
              onClick={() => navigate(`/${card.id}`)}
              aria-label="settings"
            >
              <InfoIcon />
            </IconButton>
          }
          title={card.name}
          subheader={
            card.evolvesFrom ? `Evolves from ${card.evolvesFrom}` : "Basic"
          }
        />
        <CardMedia
          component="img"
          height="475"
          image={card.images.small}
          alt=""
        />
        <CardContent>
          <Typography align="center" variant="body2" color="text.secondary">
            HP: {card.hp} | ID: {card.id} | RARITY: {card.rarity}
          </Typography>
        </CardContent>

        <Grid style={{ textAlign: "center", marginBottom: 10 }}>
          <PopoverCustom card={card} children={content} />
        </Grid>
      </Card>
    </Paper>
  );
}

export default CompactCard;
