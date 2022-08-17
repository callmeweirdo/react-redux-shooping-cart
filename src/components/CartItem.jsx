import React, { useEffect } from "react";

import {
  Container,
  Box,
  Paper,
  Stack,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increase,
  decrease,
  calculateTotals,
} from "../redux/features/cartSlice";

const CartItem = ({ title, img, amount, price, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Box p={2}>
          <Paper>
            <Stack
              spacing={1}
              direction="column"
              divider={<Divider orientation="horizontal" />}
            >
              <Paper elevation={1}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  //   py={1}
                >
                  <img src={img} width={100} height={90} alt={title} />
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="body2">{price}</Typography>
                    <Button
                      color="error"
                      variant="outlined"
                      size="small"
                      onClick={() => dispatch(removeItem(id))}
                    >
                      remove
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    px={2}
                  >
                    <Button onClick={() => dispatch(increase(id))}>
                      <ExpandLessIcon />
                    </Button>
                    <p>{amount}</p>
                    <Button
                      onClick={() =>
                        amount == 1
                          ? dispatch(removeItem(id))
                          : dispatch(decrease(id))
                      }
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default CartItem;
