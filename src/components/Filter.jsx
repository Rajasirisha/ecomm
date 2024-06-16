import React from 'react';
import { FormControlLabel, Checkbox, Radio, Button, Divider, Box } from '@mui/material';
import { CartState } from '../context/Context';
import Rating from './Rating';

const Filter = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  return (
    <div className="filter">
      <span className="title">Filter Products</span>
      <Divider sx={{ backgroundColor: '#ffffff' }} />
      <FormControlLabel
        control={<Radio sx={{ color: '#ffffff', '&.Mui-checked': { color: '#ffffff' } }} />}
        label="Ascending"
        checked={sort === 'lowToHigh'}
        onChange={() =>
          productDispatch({
            type: 'SORT_BY_PRICE',
            payload: 'lowToHigh',
          })
        }
      />
      <FormControlLabel
        control={<Radio sx={{ color: '#ffffff', '&.Mui-checked': { color: '#ffffff' } }} />}
        label="Descending"
        checked={sort === 'highToLow'}
        onChange={() =>
          productDispatch({
            type: 'SORT_BY_PRICE',
            payload: 'highToLow',
          })
        }
      />
      <FormControlLabel
        control={
          <Checkbox
           sx={{'&.MuiCheckbox-root': {color: '#FFFFFF'}}}
            checked={byStock}
            onChange={() =>
              productDispatch({
                type: 'FILTER_BY_STOCK',
              })
            }
          />
        }
        label="Include Out of Stock"
      />
      <FormControlLabel
        control={
          <Checkbox
           sx={{'&.MuiCheckbox-root': {color: '#FFFFFF'}}}
            checked={byFastDelivery}
            onChange={() =>
              productDispatch({
                type: 'FILTER_BY_DELIVERY',
              })
            }
          />
        }
        label="Fast Delivery Only"
      />
      <span style={{ padding: 10 }}>
        <label >Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: 'FILTER_BY_RATING',
              payload: i + 1,
            })
          }
          style={{ cursor: 'pointer' }}
        />
      </span>
      <Box height={30} />
      <Button
        variant="filled"
        sx={{'&.MuiButtonBase-root': {backgroundColor: '#FFFFFF', color: '#b98259', textTransform: 'none', fontWeight: '600'}}}
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTERS',
          })
        }
      >
        Clear Filters
      </Button>
      {/* <img  
              style={{ width: '100%', height: '100%', paddingTop: '10px' }} 
              src="./images/delivery.jpg" 
              alt="delivery" 
            /> */}
    </div>
  );
};

export default Filter;