import React from "react";

function InputField({
  type,
  value,
  onChange,
  placeholder,
  className,
  onKeyDown,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      onKeyDown={onKeyDown}
    />
  );
}

export default InputField;
