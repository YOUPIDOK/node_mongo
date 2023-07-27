# Node - Mongo
> API node permetant de se connecter pour gérer des recettes de cuisine
## Étudiants
- Nathan PONCET
- Léo STEVENOT

## Technologies
- Node ^16.20.0 
- MongoDB
- Mongoose
- Express
- Docker
  - Server
  - MongoDB
- TypeScript

## Installation
Installation des dépendances :
```bash
yarn install
```

Configuration des variables d'environments
```bash
cp .env.example .env
```

## Commandes
### Développement
```bash
yarn dev
```
Ou avec docker
```sheel
yarn docker:dev
```
### Production
```bash
yarn start
```
Ou avec docker
```sheel
yarn docker:prod
```
### Compilation .ts vers .js
```bash
yarn compile
```

### Compilation .ts vers .js en mode Watch
```bash
yarn compile:watch
```

### Fixtures
```shell
yarn seed
```

### Création d'un utilisateur
```shell
yarn create:user
```

## API
### Authentification
- register
- login
- logout
- refreshToken
- forgotPassword
- resetPassword

### Sécurité
- Authentification à l'API par JWT token, renouvlable avec refresh token
  - Token : valide 30 minutes (configurable dans le .env)
  - Refresh token : valide 30 jours (configurable dans le .env)
- Verification des Roles [user, admin]
- Vérification des dépendances des objets, est ce qu'un utilisateur a le droit de modifier ou supprimer

### CRUD
- CRUD User
- CRUD Recipe
- CRUD Nutrition
- Générer un recette aléatoire

### Vérification de données
- Joi / utilisation de validateur pour chaque endpoint

### Message d'erreur
Structure d'un message d'erreur
```json
{
  "code": 404,
  "message": "Not found"
}
```

### Documentation des routes
Lien [Swagger](http://localhost:3000/v1/docs) - Seulement en mode développement

### Logger
```javascript
import logger from 'src/config/logger';

logger.error('message'); // Niveau 0
logger.warn('message'); // Niveau 1
logger.info('message'); // Niveau 2
logger.http('message'); // Niveau 3
logger.verbose('message'); // Niveau 4
logger.debug('message'); // Niveau 5
```

## Structure du dossier src
```
src
├── config
├── db
|   ├── seeder
├── modules
|   ├── *
├── routes        
```
