import { makeStyles, styled } from "@material-ui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  menu: {
    display: "flex",
  },
  paper: {
    background: "red",
  },
  gridMenu: {
    position: "relative",
    width: "100%",
  },
  gridItem: {
    position: "absolute",
  },
  box: {
    display: "flex",
    position: "absolute",
    background: "white",
  },
});

const CustomButton = styled(Button)({
  borderRadius: 0,
});

export { useStyles, CustomButton };
