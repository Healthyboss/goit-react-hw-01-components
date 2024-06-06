import PropTypes from "prop-types";
const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className="item">
    <span className={`status${isOnline ? "online" : "offline"}`}>
      {isOnline ? "Online" : "Offline"}
    </span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name"> {name} </p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
