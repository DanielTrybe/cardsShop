import React from "react";
import { Typography, Grid, Popover } from "@mui/material";
import { Card } from "services/context/types";

function PopoverCustom({ card }: Card) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        style={{ textAlign: "center" }}
      >
        Attack details
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography style={{ padding: 5 }}>
          {card.attacks.map((attack) => (
            <Grid
              style={{
                border: "1px solid lightgray",
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <Typography sx={{ p: 1 }}>
                {attack.name} -{" "}
                {attack.cost.map((cost) => (
                  <span>{cost} </span>
                ))}{" "}
                {attack.damage ? `- ${attack.damage}` : ""}
              </Typography>

              <Typography sx={{ p: 1 }}>{attack.text}</Typography>
            </Grid>
          ))}
        </Typography>
      </Popover>
    </div>
  );
}

export default PopoverCustom;
