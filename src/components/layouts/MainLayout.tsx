import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Menus from "./Menus/Menu";

export default function MainLayout() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Menus />
      <Outlet />
    </Container>
  );
}
