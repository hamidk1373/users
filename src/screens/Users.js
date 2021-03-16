import FilterBox from "../components/FilterBox";
import UsersList from "../components/UsersList";
import { mockData } from "../mockData/users";
import "./Users.css";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export default function Users() {
  const [list, setlist] = useState(mockData);
  const [filteredList, setfilteredList] = useState(mockData);

  const [searchInputValue, setsearchInputValue] = useState("");
  const [selectedGender, setselectedGender] = useState(undefined);

  const options = {
    includeScore: true,
    isCaseSensitive:false,
    includeMatches:true,
    minMatchCharLength:3,
    location:1,
    keys: ['first_name']
  };
  

  useEffect(() => {
    let newFilteredList = list; 

     // filter by search input
    const fuse = new Fuse(newFilteredList, options);
    if(searchInputValue.length>0)
    {
    newFilteredList=fuse.search(searchInputValue);   
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
