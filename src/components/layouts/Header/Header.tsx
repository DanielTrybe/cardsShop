import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useStyles, CustomTextField } from "./style";
import PkmLogo from "images/pkm-tcg.png";
import { useCardsContext } from "hooks";

export default function Header() {
  const { search, setSearch, getCards } = useCardsContext();

  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <Box
        sx={{
          width: 200,
        }}
      >
        <img data-testid="header-logo" src={PkmLogo} width="100%" alt="logo" />
      </Box>
      <CustomTextField
        label="Search a Card"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "100%" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        data-testid="header-input"
      />
      <Button data-testid="header-btn" onClick={() => getCards()}>
        Buscar
      </Button>
    </Grid>
  );
}
