import React from "react";

export default function FilterBox({
  searchValue,
  onChange,
  selectedGender,
  onChangeSelectedGender,
}) {
  return (
    <div className='filterBoxContainer'>
      <div className='filterBoxContainer__searchbox'>
        <label>First name</label>
        <input
          placeholder='Search in user names...'
          value={searchValue}
          onChange={onChange}
          // onChange={(event)=>onChange(event)}
        />
      </div>
      <div className='filterBoxContainer__selectorbox'>
        <button
          onClick={() => onChangeSelectedGender("Male")}
          className={selectedGender === "Male" ? "selectedGender" : ""}
        >
          Male
        </button>
        <button
          onClick={() => onChangeSelectedGender("Female")}
          className={selectedGender === "Female" ? "selectedGender" : ""}
        >
          Female
        </button>
        <button onClick={() => onChangeSelectedGender(undefined)}>X</button>
      </div>
    </div>
  );
}
