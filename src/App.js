// data
import userData from './data/user.json';
import statisticsData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactionsData from './data/transactions.json';

// components
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <Container>
      <Profile
        imageUrl={userData?.avatar}
        userName={userData?.name}
        tag={userData?.tag}
        location={userData?.location}
        followers={userData?.stats?.followers}
        views={userData?.stats?.views}
        likes={userData?.stats?.likes}
      />

      <Statistics title="Upload Stats" items={statisticsData} />
      <FriendsList friends={friendsData} />
      <Transactions transactions={transactionsData} />
    </Container>
  );
}

export default App;
