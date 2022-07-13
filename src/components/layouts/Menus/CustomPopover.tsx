import React from "react";

import { Popover, Grid, Box, Button, Paper } from "@mui/material";
import { useStyles, CustomButton } from "./styles";

type PopoverProps = {
  label: string;
  onClick: (value: string) => void;
  choices: Array<string>;
};

export default function CustomPopover({
  label,
  choices,
  onClick,
}: PopoverProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected = (event.target as HTMLButtonElement).value;
    onClick(selected);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <Paper elevation={1} onMouseLeave={handleClose}>
      <Grid className={classes.gridMenu}>
        <CustomButton variant="contained" onClick={handleClick}>
          {label}
        </CustomButton>

        {anchorEl && (
          <Box className={classes.box}>
            <Grid>
              {choices.map((choice, index) => (
                <Button
                  key={index}
                  onClick={(event) => handleSelect(event)}
                  value={choice}
                >
                  {choice}
                </Button>
              ))}
            </Grid>
            <Grid>VAI ESTAR COM CARD AQUI</Grid>
          </Box>
        )}
      </Grid>
    </Paper>
  );
}
