import { useState } from 'react';
import api from './api';
import Header from './components/Header';

function App() {
  const [todayGames, setTodayGames] = useState([]);

  const handleClick = async () => {
    const { data, status } = await api.get('/scoreboard');
    if (status === 200) {
      setTodayGames(data);
    }
  };

  return (
    <>
      <Header todayGames={todayGames} />
      <div>
        <h1>testing</h1>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={handleClick}>
          count is
        </button>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
