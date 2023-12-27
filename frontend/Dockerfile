# syntax=docker/dockerfile:1

FROM node:lts-alpine

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
COPY . .

# Run the application.
CMD ["npm", "run", "dev"]
