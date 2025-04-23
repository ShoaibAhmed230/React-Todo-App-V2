import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import AddItem from "./AddItem";
import Input from "./Input";
import Title from "./Title";
import FinishMsg from "./FinishMsg";

function App() {
  //value get by on enter kry

  // const [list, setList] = useState([]);

  // const changeValOnEnterKey = (event) => {
  //   if (event.key === "Enter") {
  //     let newList = event.target.value;
  //     console.log(newList);
  //     let featureList = [...list, newList];
  //     console.log(featureList);
  //     event.target.value = "";
  //     setList(featureList);
  //   }
  // };

  //value get by on click

  const [inputVal, setInputVal] = useState(""); // input ki value get krny k lie

  const [displayInput, setDisplayInput] = useState([]); //btn text browser pr diplat]y krny k lie

  const handleInputchange = (event) => {
    setInputVal(event.target.value);
  };

  const changeValOnBtnClick = () => {
    setDisplayInput([...displayInput, inputVal]);
    setInputVal("");
  };

  const handleDeleteItem = (index) => {
    const newDisplayInpunt = displayInput.filter(
      (item, itemIndex) => itemIndex !== index
    );
    setDisplayInput(newDisplayInpunt);
    console.log("deleted" + index);
  };

  return (
    <>
      <div className={`${styles["main"]} min-vh-100 `}>
        {/* <Title appTtitle={'Todo App'}></Title> */}
        <AddItem
          item={displayInput}
          // changeValOnKey={changeValOnEnterKey}
          btnClick={changeValOnBtnClick}
          InputValchangeOnclick={handleInputchange}
          displayValOnclick={inputVal}
          onDeleteClick={handleDeleteItem}
        ></AddItem>
        <FinishMsg displayInput={displayInput}></FinishMsg>
        {/* <Input></Input> */}
      </div>
      <span className="text-white">By Shoaib</span>
    </>
  );
}

export default App;
