from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from nba_api.live.nba.endpoints import scoreboard
from nba_api.live.nba.endpoints import boxscore

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/api/scoreboard')
def read_root():
    games = scoreboard.ScoreBoard()
    games_dict = games.get_dict()

    if games_dict["meta"]["code"] == 200:
        return games_dict["scoreboard"]["games"]
    else:
        return { "status": "failed" }

@app.get('/api/box-score')
def get_box_score(game_id):
    box = boxscore.BoxScore(game_id=game_id)
    print(box.get_dict())
