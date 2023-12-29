import { useState } from 'react'
import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent, styled } from '@mui/material';
import api from '../api';
import { Game } from '../types';

const PickerContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 0px 5px 0px #B7B9BC',
  padding: 10,
  marginTop: 50,
  width: '75%',
  borderRadius: '5px',
}));

type PickerProps = {
  teams: string[];
  games: Game[];
};

function Picker({ teams, games }: PickerProps) {
  const [selectedTeam, setSelectedTeam] = useState('');
  
  const fetchBoxScore = async (gameId: string) => {
    const data = await api.get('/box-score', { params: { game_id: gameId } });
    console.log('data from box-score', data);
  };

  const onTeamChange = async (event: SelectChangeEvent) => {
    const team = event.target.value;
    setSelectedTeam(team);

    const gameId = games?.find(
      ({ awayTeam, homeTeam }) => team === awayTeam.teamName || team === homeTeam.teamName)?.gameId;
    if (gameId) {
      await fetchBoxScore(gameId);
    }
  };


  return (
    <PickerContainer>
      {teams.length < 1
        ? <div>Loading...</div>
        : (
        <>
          <h3>Pick 'em</h3>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="team-label">Team</InputLabel>
            <Select
              labelId="team-label"
              id="team-select"
              value={selectedTeam}
              label="Team"
              onChange={onTeamChange}
            >
                <MenuItem disabled value="">
                  <em>Team</em>
                </MenuItem>
                {teams?.map((team: string) => (
                <MenuItem key={team} value={team}>{team}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </>
      )}
    </PickerContainer>
  );
}

export default Picker;
