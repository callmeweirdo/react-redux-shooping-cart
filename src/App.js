import React, { useEffect } from "react";
import "./App.css";
import { Box, Container } from "@mui/material";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./redux/features/cartSlice";
import { openModal } from "./redux/features/modalSlice";
import BasicModal from "./components/BasicModal";
import { Audio } from "react-loader-spinner";

function App() {
  const { cart, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            heigh: "100vh",
          }}
        >
          <Audio ariaLabel="loading-indicator" />
        </Box>
      </>
    );
  }

  return (
    <>
      {isOpen && <BasicModal />}

      <NavBar />
      <CartContainer />
      {/* <CartItem /> */}
    </>
  );
}

export default App;
