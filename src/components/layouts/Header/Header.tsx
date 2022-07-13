import React from "react";
import { Grid, Box } from "@mui/material";
import { useStyles, CustomTextField } from "./style";
import PkmLogo from "images/pkm-tcg.png";

export default function Header() {
  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <Box
        sx={{
          width: 200,
        }}
      >
        <img src={PkmLogo} width="100%" alt="logo" />
      </Box>
      <CustomTextField
        label="Search a Card"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "100%" }}
      />
    </Grid>
  );
}
