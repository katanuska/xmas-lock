import { Input } from "antd";
import { forwardRef } from "react";

const DigitInput = forwardRef((props, ref) => {
  const handleFocus = (event) => {
    event.target.select();
  }

  return (
    <Input onFocus={handleFocus} ref={ref} {...props} />
  )
})

export default DigitInput;
