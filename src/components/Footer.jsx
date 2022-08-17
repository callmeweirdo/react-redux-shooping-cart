import React, { useEffect } from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { clearCart, calculateTotals } from "../redux/features/cartSlice";
import { openModal } from "../redux/features/modalSlice";
import BasicModal from "./BasicModal";

const Footer = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Container sx={{ mb: 5 }}>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between" }} m={2}>
          <Typography variant="h4">Total:</Typography>
          <Typography variant="h4">{total.toFixed(2)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            color="error"
            variant="outlined"
            size="medium"
            onClick={() => dispatch(openModal())}
          >
            Clear Cart
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
