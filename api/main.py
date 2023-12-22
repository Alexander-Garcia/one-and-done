from nba_api.live.nba.endpoints import scoreboard

games = scoreboard.ScoreBoard()

print(games)
print(games.get_json())

