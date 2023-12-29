import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import api from './api';
import Header from './components/Header';
import Picker from './components/Picker';


type Team = {
  homeTeam: {
    teamName: string;
  }
  awayTeam: {
    teamName: string;
  };
};

const AppContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));

function App() {
  const [todayGames, setTodayGames] = useState([]);
  const [teams, setTeams] = useState([]);
  const [boxScore, setBoxScore] = useState([]);
  console.log('box score', boxScore);

  useEffect(() => {
    api.get('/scoreboard').then(result => {
      console.log('result', result);
      const { data, status } = result;

      if (status === 200) {
        const teams = data.reduce((acc: string[], team: Team) => {
          acc.push(team.homeTeam.teamName);
          acc.push(team.awayTeam.teamName);
          return acc;
        }, [])

        setTodayGames(data);
        setTeams(teams);
      }
    })
  }, [])

  const onScoreboardClick = async () => {
    const { data, status } = await api.get('/scoreboard');
    if (status === 200) {
      const teams = data.reduce((acc: string[], team: Team) => {
        acc.push(team.homeTeam.teamName);
        acc.push(team.awayTeam.teamName);
        return acc;
      }, [])

      setTodayGames(data);
      setTeams(teams);
  }
};

  const onBoxScoreClick = async () => {
    const { data, status } = await api.get('/box-score');
    if (status === 200) {
      setBoxScore(data);
    }
  };

  return (
    <AppContainer>
      <Header todayGames={todayGames} />
      <Picker teams={teams} />
      <div>
        <button onClick={onScoreboardClick}>
          Scoreboard
        </button>
        <button onClick={onBoxScoreClick}>
          Box Score
        </button>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </AppContainer>
  )
}

export default App
