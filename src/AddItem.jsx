import styles from "./AddItem.module.css";
import trashSVG from "./assets/icons8-trash-2.svg";
import { BiMessageAdd } from "react-icons/bi";
import Title from "./Title";
import ErrorMsg from "./ErrorMsg";
import FinishMsg from "./FinishMsg";

const AddItem = ({
  item,
  btnClick,
  InputValchangeOnclick,
  displayValOnclick,
  onDeleteClick,
}) => {
  return (
    <div className={styles.container}>
      <Title appTtitle={"Todo App"}></Title>

      <div className={`${["controller"]} d-flex`}>
        <input
          type="text"
          placeholder="Enter Todo Items"
          // onKeyDown={changeValOnKey}
          onChange={InputValchangeOnclick}
          value={displayValOnclick}
          className={`${styles["addInput"]} form-control form-control-sm mb-3 bg-transparent text-white`}
        />

        <button
          onClick={btnClick}
          className={`${styles["addItemBtn", "tooltip" ]}  btn btn-outline-light`}
        >
          <BiMessageAdd />
          <span className={styles.tooltiptext}>Add Item</span>
        </button>
      </div>
      <ul className={`${styles["listConatiner"]} list-group list-group-flush`}>
        {item.map((itemList, index) => (
          <li
            key={itemList}
            className={`${styles["listItem"]} list-group-item bg-transparent text-white text-wrap word-break`}
          >
            {itemList}
            <button
              className={`${styles["deleteItemBtn"]} border-0 bg-transparent`}
              onClick={() => onDeleteClick(index)}
            >
              <img src={trashSVG} />
            </button>
          </li>
        ))}
      </ul>
      <ErrorMsg item={item}></ErrorMsg>
      {/* <FinishMsg item={item}></FinishMsg> */}
    </div>
  );
};

export default AddItem;
