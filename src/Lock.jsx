import { useCallback, useEffect, useRef, useState } from "react";
import DigitInput from "./DigitInput";

function Lock(props) {
  const { digitsNumber, code, onSuccess, unlocked } = props;
  const [digits, setDigits] = useState(new Array(digitsNumber).fill(0));

  const inputRefs = useRef([]);

  const checkDigits = useCallback(() => {
    const correctDigits = digits.filter((digit, i) => code[i] === parseInt(digit, 10))
    if (correctDigits.length === digitsNumber) {
      onSuccess?.();
    }
  }, [digits, code, digitsNumber, onSuccess])
  
  useEffect(() => checkDigits(), [digits, checkDigits]);

  const handleDigitChange = (e, i) => {
    let newDigits = [...digits];
    
    let value = e.target.value;
    if (!value) value = 0;
    if (value.length > 1) value = value.substr(value.length - 1);
    
    newDigits[i] = value;
    setDigits(newDigits);

    const nextItem = i + 1;
    if (nextItem < digitsNumber) {
      inputRefs.current[nextItem].focus();
    }
  }

  var inputs = [];
  for (let i = 0; i < digitsNumber; i++) {
    inputs.push(
      <DigitInput
      ref={el => inputRefs.current[i] = el} 
        style={{ textAlign: 'center' }}
        key={i} 
        value={digits[i]} 
        onChange={(e) => handleDigitChange(e, i)} 
        type="number" 
        min={0} 
        max={9} 
        className="digit" 
      />
    )
  }

  return (
    <div className="Lock">
      {!unlocked && inputs}
    </div>
  );
}

export default Lock;