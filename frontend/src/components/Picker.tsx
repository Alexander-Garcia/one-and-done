import { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent, styled } from '@mui/material';

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
};

function Picker({ teams }: PickerProps) {
  const [selectedTeam, setSelectedTeam] = useState('');
  
  const onTeamChange = (event: SelectChangeEvent) => {
    setSelectedTeam(event.target.value);
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
