import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from "./Reducers";
import { Box } from "@mui/material";

const Cart = createContext();

const Context = ({ children }) => {
  faker.seed(99);

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: `${faker.image.food()}?random=${Math.round(Math.random() * 5000)}`,
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      <Box>{children}</Box>
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};


