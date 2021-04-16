import { memo } from 'react'

const UserProfile = ({ firstName, ipAddress, onDeleteItemClicked }) => {
  ;<div className="userscontainer__item">
    <div
      className="userscontainer__delete"
      onClick={onDeleteItemClicked}
      aria-hidden="true"
    >
      X
    </div>
    <div className="userscontainer__name">{firstName}</div>
    <div className="userscontainer__ip">{ipAddress}</div>
  </div>
}
export default memo(UserProfile)

// React.memo equals React.PureComponent.
// PureComponent is for class components
// React.memo is for function components
