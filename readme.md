# Node - MongoDb
> Léo STEVENOT & Nathan PONCET

# Installation

## Set the environment variables
```bash
cp .env.example .env # Copy .env.example to .env and edit it
```

## Requirements
- Node v7.6+
- Docker
- Yarn


## Getting Started

### Install Mongo db & Start docker containers
```bash
docker-compose up -d
```

### Intall all dependencies
```bash
yarn install 
```

### Start the server in Developpment mode
```bash
yarn dev
```

### Build the server
```bash
yarn start
```

### Start the server in Production mode
```bash
yarn start
```

# Conventional Commits
```bash
git commit -m "<Type>[scope]: <description>"
```