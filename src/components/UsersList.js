import UserProfile from "./UserProfile";

export default function UsersList({ list, onDeleteItemClicked }) {
  return (
    <div className='userscontainer'>
      {list.map((item) => (
        <UserProfile
          key={item.id}
          // item={item}
          first_name={item.first_name}
          ip_address={item.ip_address}
          onDeleteItemClicked={() => onDeleteItemClicked(item.id)}
        />
      ))}
    </div>
  );
}
