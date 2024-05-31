import React from 'react';

function Button({ label, onClick, customClass, disabled }) {
  return (
    <button disabled={disabled} className={customClass} onClick={onClick}>{label}</button>
  )
}

export default Button;