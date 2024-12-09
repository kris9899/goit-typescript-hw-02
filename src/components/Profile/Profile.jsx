import css from '../Profile/Profile.module.css';
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        <img
          className={css.userAvatar}
          src={image}
          alt="User avatar"
          width={100}
          height={100}
        />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userInfo}>
        <li className={css.userInfoItem}>
          <span className={css.infoName}>Followers</span>
          <span className={css.infoData}>{stats.followers}</span>
        </li>
        <li className={css.userInfoItem}>
          <span className={css.infoName}>Views</span>
          <span className={css.infoData}>{stats.views}</span>
        </li>
        <li className={css.userInfoItem}>
          <span className={css.infoName}>Likes</span>
          <span className={css.infoData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
