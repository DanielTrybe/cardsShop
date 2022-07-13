import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Menus from "./Menus/Menu";
import CardsProvider from "services/context/CardsList";

export default function MainLayout() {
  return (
    <CardsProvider>
      <Container maxWidth="xl">
        <Header />
        <Menus />
        <Outlet />
      </Container>
    </CardsProvider>
  );
}
