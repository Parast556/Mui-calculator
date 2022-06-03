import * as React from 'react';
import Button from '@mui/material/Button';
import './Button1.css';

function Button1({symbol,color}) {
  return <Button style={{backgroundColor:color}} className="button-wrapper" 
  variant="contained">
      {symbol}</Button>;
}
export default Button1;