import cartReducer from "./features/cartSlice";
import modalSlice from "./features/modalSlice";

const rootReducer = {
  cart: cartReducer,
  modal: modalSlice,
};

export default rootReducer;
