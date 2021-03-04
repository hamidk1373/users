import FilterBox from "../components/FilterBox";
import UsersList from "../components/UsersList";
import { mockData } from "../mockData/users";
import "./Users.css";

export default function Users() {
  return (
    <div>
      <FilterBox />
      <UsersList list={mockData} />
    </div>
  );
}
