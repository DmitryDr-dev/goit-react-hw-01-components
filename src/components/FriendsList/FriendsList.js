import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import FriendsItem from '../FriendsItem/FriendsItem';

function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendsItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

export default FriendsList;
