import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendItem}>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt="Avatar"
        width="55"
        height="55"
      />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          css.friendStatus,
          isOnline && css.online,
          !isOnline && css.offline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
