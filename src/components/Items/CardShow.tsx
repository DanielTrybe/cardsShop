import { Card } from "services/context/types";
import { Grid } from "@mui/material";

import { CompactCard } from "components/Items";

function CardShow({ card }: Card) {
  return (
    <Grid>
      <CompactCard card={card} />
    </Grid>
  );
}

export default CardShow;
