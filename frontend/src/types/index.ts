export type Team = {
  teamId: number;
  teamName: string;
};

export type Game = {
  gameStatusText: string;
  gameId: string;
  homeTeam: Team;
  awayTeam: Team;
};
