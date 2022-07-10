import { useState, useCallback } from "react";

const useInput = (initialState = "") => {
  const [inputState, setInputState] = useState(initialState);
  const handleInputChange = useCallback((event) => {
    const { name,value } = event.target;
    setInputState((state) => {
        const copy = {...state};
        copy[name] = value;
        return copy;
    });
  }, []);
  return [inputState, handleInputChange];
};

export default useInput;
