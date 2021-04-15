import React from 'react'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'

const MyButton = styled(Button)({
  marginRight: 4
})

export default function FilterBox({
  searchValue,
  onChange,
  selectedGender,
  onChangeSelectedGender
}) {
  return (
    <div className="filterBoxContainer">
      <div className="filterBoxContainer__searchbox">
        <label>First name</label>
        <input
          placeholder="Search in user names..."
          value={searchValue}
          onChange={onChange}
          // onChange={(event)=>onChange(event)}
        />
      </div>
      <div className="filterBoxContainer__selectorbox">
        <MyButton
          variant="contained"
          color="primary"
          onClick={() => onChangeSelectedGender('Male')}
        >
          Male
        </MyButton>
        <MyButton
          variant="contained"
          color="primary"
          onClick={() => onChangeSelectedGender('female')}
        >
          Female
        </MyButton>

        <MyButton
          variant="contained"
          color="primary"
          onClick={() => onChangeSelectedGender(undefined)}
        >
          X
        </MyButton>
      </div>
    </div>
  )
}
