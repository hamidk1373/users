import UserProfile from "./UserProfile";

export default function UsersList({ list, onDeleteItemClicked }) {
  return (
    <div className='userscontainer'>
      {list.map((item) => (
        <UserProfile
          key={item.id}
          // item={item}
          firstName={item.first_name}
          ipAddress={item.ip_address}
          onDeleteItemClicked={() => onDeleteItemClicked(item.id)}
        />
      ))}
    </div>
  );
}
