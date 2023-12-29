import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import api from './api';
import Header from './components/Header';
import Picker from './components/Picker';
import { Game } from './types';

const AppContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));

function App() {
  const [todayGames, setTodayGames] = useState([]);
  const [teams, setTeams] = useState([]);
  const [boxScore, setBoxScore] = useState([]);
  console.log('boxScore', boxScore);

  useEffect(() => {
    api.get('/scoreboard').then(result => {
      const { data, status } = result;

      if (status === 200) {
        const teams = data.reduce((acc: string[], game: Game) => {
          acc.push(game.homeTeam.teamName);
          acc.push(game.awayTeam.teamName);
          return acc;
        }, [])

        setTodayGames(data);
        setTeams(teams);
      }
    })
  }, [])

  const onBoxScoreClick = async () => {
    const { data, status } = await api.get('/box-score');
    if (status === 200) {
      setBoxScore(data);
    }
  };

  return (
    <AppContainer>
      <Header todayGames={todayGames} />
      <Picker teams={teams} games={todayGames} />
      <div style={{ marginTop: 20 }}>
        <button onClick={onBoxScoreClick}>
          Box Score
        </button>
      </div>
    </AppContainer>
  )
}

export default App
