import React from 'react'
import './button.css'
const Button = ({ onClick, block, children, disabled }) =>
  <button className='button' disabled={disabled} onClick={onClick} >
    {children}
  </button>


export const BlockButton = ({ onClick, block, children, disabled }) =>
  <button className='button button-block' disabled={disabled} onClick={onClick} >
    {children}
  </button>

export default Button
