import React from "react";

export default function UsersList({ list }) {
  return (
    <div className='userscontainer'>
      {list.map((item) => (
        <div className='userscontainer__item'>
          <div className='userscontainer__name'>{item.first_name}</div>
          <div className='userscontainer__ip'>{item.ip_address}</div>
        </div>
      ))}
    </div>
  );
}
