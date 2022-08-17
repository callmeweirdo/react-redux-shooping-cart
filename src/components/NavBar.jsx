import * as React from "react";

import { useSelector, useDispatch } from "react-redux";

// icons import
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function ButtonAppBar() {
  const { amount } = useSelector((state) => state.cart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OG toolkit
          </Typography>
          <IconButton>
            <Typography sx={{ fontSize: "24px", color: "white" }}>
              {amount}
            </Typography>{" "}
          </IconButton>
          <Avatar>
            <ShoppingBagIcon> </ShoppingBagIcon>
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
