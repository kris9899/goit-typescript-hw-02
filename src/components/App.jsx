import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import friends from '../Data/friends.json';
import userData from '../Data/userData.json';
import transactions from '../Data/transaction.json';
import TransactionHistoty from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistoty items={transactions} />
    </>
  );
}
