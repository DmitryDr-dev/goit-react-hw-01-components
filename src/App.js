// data
import userData from './data/user.json';

// components
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Profile
      imageUrl={userData.avatar}
      userName={userData.name}
      tag={userData.tag}
      location={userData.location}
      followers={userData.stats.followers}
      views={userData.stats.views}
      likes={userData.stats.likes}
    ></Profile>
  );
}

export default App;
