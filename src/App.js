// data
import userData from './data/user.json';
import statisticsData from './data/statistical-data.json';
import friendsData from './data/friends.json';

// components
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';

function App() {
  return (
    <div>
      <Profile
        imageUrl={userData.avatar}
        userName={userData.name}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      ></Profile>

      <Statistics items={statisticsData}></Statistics>
      <FriendsList friends={friendsData}></FriendsList>
    </div>
  );
}

export default App;
