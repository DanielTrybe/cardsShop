import * as React from "react";
import { styled } from "@mui/material/styles";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Card as CardType } from "services/context/types";
import { PopoverCustom } from "components/Items";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
{
  /* <img src={card.images.small} alt={card.name} /> */
}
function CompactCard({ card }: CardType) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper elevation={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
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

        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Grid style={{ textAlign: "center", marginBottom: 10 }}>
          <PopoverCustom card={card} />
        </Grid>
      </Card>
    </Paper>
  );
}

export default CompactCard;
