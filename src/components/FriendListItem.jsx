import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ id, isOnline, avatar, name }) => (
  <li key={id} className={css.friendItem}>
    <span
      className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
    <img
      className={css.friendAvatar}
      src={avatar}
      alt="User avatar"
      width="48"
    />
    <p className={css.friendName}> {name} </p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
