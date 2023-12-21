import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';

const options = ['All', 'Primary', 'Secondary'];

export default function DissButton() {
  const [open, setOpen] = React.useState(false);
  const actionRef = React.useRef(null);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  return (
    <React.Fragment>
         <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <ButtonGroup
        ref={anchorRef}
        variant="solid"
        color="#FFF"
        aria-label="split button"
        sx={{ width: 150, height: 25, borderRadius: 20 }}
      >
        <Button variant="filled" style={{ backgroundColor: '#173767', 
        width: '150px', 
        height: '25px', 
        borderRadius: "20px 0 0 20px", 
        color: '#FFF' }} 
        onClick={handleClick}>{options[selectedIndex]}
        </Button>
        <IconButton
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="All"
          aria-haspopup="menu"
          onMouseDown={() => {
            actionRef.current = () => setOpen(!open);
          }}
          onKeyDown={() => {
            actionRef.current = () => setOpen(!open);
          }}
          onClick={() => {
            actionRef.current?.();
          }}
          style={{width: 25, height: 25, color: '#173767', borderRadius: "0 20px 20px 0", backgroundColor: '#E2A925' }}
        >
          <ArrowDropDownIcon />
        </IconButton>
      </ButtonGroup>
      </Box>
      <Menu open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current}>
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === null}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}