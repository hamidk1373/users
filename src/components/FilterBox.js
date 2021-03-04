import React from "react";

export default function FilterBox() {
  return (
    <div className='filterBoxContainer'>
      <div className='filterBoxContainer__searchbox'>
        <label>First name</label>
        <input placeholder='Search in user names...' />
      </div>
      <div className='filterBoxContainer__selectorbox'>Gender filter</div>
    </div>
  );
}
