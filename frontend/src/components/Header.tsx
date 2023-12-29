import { styled } from "@mui/material"

const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  boxShadow: '0px 4px 6px -4px #B7B9BC',
  height: 75,
}));

const GameCard = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

type Team = {
  teamId: number;
  teamName: string;
};

type Game = {
  gameStatusText: string;
  gameId: string;
  homeTeam: Team;
  awayTeam: Team;
};

type HeaderProps = {
  todayGames: Game[];
};

function Header({ todayGames }: HeaderProps) {
  console.log('todayGames', todayGames);

  return (
    <Container>
      {todayGames.map((game) => (
      <GameCard key={game.gameId}>
        <span>
          {game.homeTeam.teamName}
            {' '}VS{' '}
          {game.awayTeam.teamName}
        </span>
        <div>{game.gameStatusText}</div>
      </GameCard>
      ))}
  </Container>
  );
}

export default Header;
