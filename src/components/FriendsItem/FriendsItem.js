import PropTypes from 'prop-types';
import s from './FriendsItem.module.css';

function FriendsItem({ avatar, name, isOnline }) {
  return (
    <div className={s.item}>
      <span className={isOnline ? s.statusTrue : s.statusFalse}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;
