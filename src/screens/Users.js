import FilterBox from "../components/FilterBox";
import UsersList from "../components/UsersList";
import { mockData } from "../mockData/users";
import "./Users.css";
import { useEffect, useState } from "react";

export default function Users() {
  const [list, setlist] = useState(mockData);
  const [filteredList, setfilteredList] = useState(mockData);

  const [searchInputValue, setsearchInputValue] = useState("");
  const [selectedGender, setselectedGender] = useState(undefined);

  useEffect(() => {
    let newFilteredList = list;

    // filter by search input
    newFilteredList = newFilteredList.filter((item) =>
      item.first_name.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    // filter by gender
    if (selectedGender) {
      newFilteredList = newFilteredList.filter(
        (item) => item.gender === selectedGender
      );
    }

    setfilteredList([...newFilteredList]);
  }, [searchInputValue, selectedGender]);

  return (
    <div>
      <FilterBox
        searchValue={searchInputValue}
        onChange={(event) => setsearchInputValue(event.target.value)}
        selectedGender={selectedGender}
        onChangeSelectedGender={setselectedGender}
      />
      <UsersList list={filteredList} />
    </div>
  );
}
