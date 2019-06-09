import React from "react";
import styles from "./TextArea.module.css";

const textAreaClasses = [styles.textArea];
const btnsClasses = [styles.btns];
const btnAddClasses = [styles.btnAdd];
const colors = ["red", "purple", "pink", "green", "blue"];

const TextArea = ({ handlerChange, value }) => (
  <div className={textAreaClasses}>
    <textarea
      onChange={handlerChange}
      cols="100"
      rows="15"
      placeholder="Enter your notes here..."
      value={value}
    />
    <div className={btnsClasses}>
      {colors.map(color => (
        <button key={color} style={{ backgroundColor: `${color}` }} />
      ))}
    </div>
    <button className={btnAddClasses}>ADD</button>
  </div>
);

export default TextArea;
