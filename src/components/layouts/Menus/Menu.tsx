import { Popover, Grid, Box, Button } from "@mui/material";
import CustomPopover from "./CustomPopover";
import { useStyles } from "./styles";

type Choices = {
  label: string;
  items: Array<string>;
};

const choices: Choices[] = [
  {
    label: "Types",
    items: [
      "Colorless",
      "Darkness",
      "Dragon",
      "Fairy",
      "Fighting",
      "Fire",
      "Grass",
      "Lightning",
      "Metal",
      "Psychic",
      "Water",
    ],
  },
  {
    label: "Collections",
    items: ["swordshield"],
  },
  {
    label: "About",
    items: ["Contact", "About"],
  },
];

export default function Menus() {
  const classes = useStyles();

  const handleClick = (item: string) => {
    console.log(item);
  };

  return (
    <Grid className={classes.menu}>
      {choices.map((choices) => (
        <CustomPopover
          label={choices.label}
          choices={choices.items}
          onClick={(value: string) => handleClick(value)}
        />
      ))}
    </Grid>
  );
}
