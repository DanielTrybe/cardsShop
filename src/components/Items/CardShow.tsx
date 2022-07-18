import React, { useState } from "react";
import { Card } from "services/context/types";
import { Typography, Grid } from "@mui/material";

import { CompactCard } from "components/Items";

function CardShow({ card }: Card) {
  return (
    <Grid>
      <CompactCard card={card} />
    </Grid>
  );
}

export default CardShow;
