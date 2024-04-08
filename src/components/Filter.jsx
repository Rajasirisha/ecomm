import React from 'react';
import { FormControlLabel, Checkbox, Radio, Button } from '@mui/material';
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
      <FormControlLabel
        control={<Radio sx={{ '&.Mui-checked': {color: '#8D2F4F'},}} />}
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
        control={<Radio sx={{ '&.Mui-checked': {color: '#8D2F4F'},}}/>}
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
           sx={{'&.MuiCheckbox-root': {color: '#8D2F4F'}}}
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
           sx={{'&.MuiCheckbox-root': {color: '#8D2F4F'}}}
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
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
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
      <Button
        variant="filled"
        sx={{'&.MuiButtonBase-root': {backgroundColor: '#8D2F4F', color: 'pink'}}}
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTERS',
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;