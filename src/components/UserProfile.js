import React, { memo } from 'react'

const UserProfile = ({ first_name, ip_address, onDeleteItemClicked }) => {
  console.log('userprofile')
  return (
    <div className="userscontainer__item">
      <div className="userscontainer__delete" onClick={onDeleteItemClicked}>
        X
      </div>
      <div className="userscontainer__name">{first_name}</div>
      <div className="userscontainer__ip">{ip_address}</div>
    </div>
  )
}

export default memo(UserProfile)

// React.memo equals React.PureComponent.
// PureComponent is for class components
// React.memo is for function components
