import React, { useRef, useState } from "react";

const NoteSection = () => {
  const [inputList, setInputList] = useState([""]); // Initialize with one empty string for one input field
  const inputRef = useRef(null);

  const onInputChange = (event, index) => {
    // Update the value of the specific input field
    const newInputList = [...inputList];
    newInputList[index] = event.target.value;
    setInputList(newInputList);
  };

  const onKeyUpHandler = (event, index) => {
    if (event.keyCode === 13) {
      // When Enter is pressed, add a new input field
      console.log("length", inputList.length);
      console.log('index',index);
    if ( index === inputList.length -1 ){
      setInputList([...inputList, ""]);
    }else{
        console.log(`Hello`)
    }
  };
}
  

  return (
    <div style={{ background: "white" }}>
      {inputList.map((input, index) => (
        <input
          ref={index === inputList.length - 1 ? inputRef : null}
          key={index}
          style={{ width: "60vw" }}
          value={input}
          onChange={(event) => onInputChange(event, index)}
          onKeyUp={(event) => onKeyUpHandler(event, index)}
        />
      ))}
    </div>
  );
};

export default NoteSection;
