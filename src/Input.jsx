import { useState } from "react";

const Input = () => {
  const [inputVal, setInputVal] = useState(""); // input ki value get krny k lie

  const [displayInput, setDisplayInput] = useState([]); //btn text browser pr diplat]y krny k lie

  const handleInputchange = (event) => {
    setInputVal(event.target.value);
  };

  const handleBtnchange = () => {
    setDisplayInput([...displayInput, inputVal]);
    setInputVal("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="value will change on button"
        onChange={handleInputchange}
        value={inputVal}
      />

      <button onClick={handleBtnchange} className={`${styles["itemBtn"]} btn btn-outline-light`}>add</button>

      <ul>
        {displayInput.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Input;
