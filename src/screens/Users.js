import FilterBox from "../components/FilterBox";
import UsersList from "../components/UsersList";
import { mockData } from "../mockData/users";
import "./Users.css";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

const options = {
  threshold: 0.4,
  keys: ["first_name", "last_name", "email"],
};

let fuse;

export default function Users() {
  const [list, setlist] = useState(mockData);
  const [filteredList, setfilteredList] = useState(mockData);

  const [searchInputValue, setsearchInputValue] = useState("");
  const [selectedGender, setselectedGender] = useState(undefined);

  useEffect(() => {
    fuse = new Fuse(list, options);
  }, [list]);

  useEffect(() => {
    let newFilteredList = list;

    // filter by search input
    if (searchInputValue.length > 0) {
      newFilteredList = fuse.search(searchInputValue);
      newFilteredList = newFilteredList.map((res) => res.item);
    }

    // filter by search input-old
    // newFilteredList = newFilteredList.filter((item) =>
    //   item.first_name.toLowerCase().includes(searchInputValue.toLowerCase())
    // );

    // filter by gender
    if (selectedGender) {
      newFilteredList = newFilteredList.filter(
        (item) => item.gender === selectedGender
      );
    }

    setfilteredList([...newFilteredList]);
  }, [searchInputValue, selectedGender, list]);

  const handleDeleteItem = (itemId) => {
    const selectedItemIndex = list.findIndex((tmp) => tmp.id === itemId);
    setlist([
      ...list.slice(0, selectedItemIndex),
      ...list.slice(selectedItemIndex + 1),
    ]);
  };

  return (
    <div>
      <FilterBox
        searchValue={searchInputValue}
        onChange={(event) => setsearchInputValue(event.target.value)}
        selectedGender={selectedGender}
        onChangeSelectedGender={setselectedGender}
      />
      <UsersList list={filteredList} onDeleteItemClicked={handleDeleteItem} />
    </div>
  );
}
