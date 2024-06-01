import { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Grid, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { List } from "@mui/material";
import { Link} from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "../components/Rating";
import './Style.css';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0);
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cart]);

  return (
    <div className="home">
      <div className="productCart">
        <List>
          {cart.map((prod) => (
            <ListItem key={prod.id}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <img src={prod.image} alt={prod.name} style={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <ListItemText primary={prod.name} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography>₹ {prod.price}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Rating rating={prod.ratings} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <FormControl fullWidth>
                    <InputLabel>Quantity</InputLabel>
                    <Select
                      value={prod.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <MenuItem key={x + 1} value={x + 1}>
                          {x + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
                  <ListItemSecondaryAction>
                    <Button
                      variant="text"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    >
                      <AiFillDelete fontSize="large" color="red"/>
                    </Button>
                  </ListItemSecondaryAction>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </div>
      <div className="subtotal summary">
      <img  
              style={{ width: '100%', height: '60%' }} 
              src="./images/payment.jpg" 
              alt="payment" 
            />
        <Typography variant="h6">Subtotal ({cart.length}) items</Typography>
        <Typography variant="h5" fontWeight="bold">
          Total: ₹ {total}
        </Typography>
        <div className="cartbuttons">
        <Button variant="filled"
        sx={{'&.MuiButtonBase-root': {backgroundColor: '#541743', color: '#eddcd9', textTransform: 'none'}}}
         disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="outlined"
              sx={{'&.MuiButtonBase-root': {color: '#541743', borderColor: '#541743', textTransform: 'none' }}}
              >
              Go To Home
          </Button>
          </Link>
          </div>
      </div>
    </div>
  );
};

export default Cart;