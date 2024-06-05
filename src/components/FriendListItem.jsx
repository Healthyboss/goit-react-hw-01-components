import PropTypes from "prop-types";
const FriendListItem = () => (
  <li className="item">
    <span className="status"> {this.props.isOnline} </span>
    <img
      className="avatar"
      src={this.props.avatar}
      alt="User avatar"
      width="48"
    />
    <p className="name"> {this.props.name} </p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
