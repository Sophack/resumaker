import React, { useState } from "react";

export default function AddDynamicInput() {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, index) => {
    const inputData = [...val];
    inputData[index] = onChangeValue.target.value;
    setVal(inputData);
  };

  const handleDelete = (index) => {
    const deleteVal = [...val];
    deleteVal.splice(index,1);
    setVal(deleteVal);
  };

  console.log(val, "data");
  return (
    <>
      <button onClick={() => handleAdd()}>Add</button>
      {val.map((data, index) => {
        return (
          <div>
            <input value={data} onChange={(e) => handleChange(e, index)}></input>
            <button onClick={() => handleDelete(index)}>x</button>
          </div>
        );
      })}
    </>
  );
}
