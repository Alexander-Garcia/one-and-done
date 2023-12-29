# One-And-Done
NBA Finals pick 'em game for friends

# Run the app
Run `docker-compose up --build` in the root directory
Open a spearate terminal window and run `docker compose watch` in root directory to enable hot reloading for the api and frontend

# Hosting
The app is hosted on EC2 with AMI linux 2023 image.  
Docker is run inside the EC2 and then exposed with CaddyServer

# Front End
The NBA endpoint will hit rate limit around 600ms so make sure calls are not that quick
Created using `create vite` with react-TS template

# API
Utilizes: 
* [FastAPI](https://fastapi.tiangolo.com/)
* [NBA API](https://github.com/swar/nba_api/tree/master)  
