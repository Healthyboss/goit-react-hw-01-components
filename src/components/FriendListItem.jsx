import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={css.friendItem}>
    <span className={clsx(css.status, { online: isOnline })}></span>
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
