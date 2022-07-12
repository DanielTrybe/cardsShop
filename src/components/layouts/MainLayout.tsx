import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Grid>
      olá aqui é o layout
      <Outlet />
    </Grid>
  );
}
