import React from "react";
import { useSelector } from "react-redux";

import { Container, Box, Paper, Typography } from "@mui/material";
import CartItem from "./CartItem";
import Footer from "./Footer";

const CartContainer = () => {
  const { amount, cart, isLoading, total } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <>
        <Container>
          <Box sx={{ p: 4, textAlign: "center" }}>
            <Paper elevation={2}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h3">Your shoping Cart</Typography>
                <Typography variant="h6">Your cart is Empty Cart</Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </>
    );
  }

  if (amount >= 1) {
    return (
      <Container>
        <Box
          sx={{
            textAlign: "center",
            // display: "flex",
            // flexGrow: 1,
            justifyContent: "center",
            // width: "80%",
          }}
          mt={5}
        >
          <Paper elevation={2}>
            <Box p={3}>
              <Typography variant="h3">Your Cart</Typography>
            </Box>
          </Paper>
        </Box>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <Footer />
      </Container>
    );
  }
};

export default CartContainer;
