// data
import userData from './data/user.json';
import statisticsData from './data/statistical-data.json';

// components
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

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
    </div>
  );
}

export default App;
