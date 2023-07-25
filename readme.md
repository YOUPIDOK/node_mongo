# Node - Mongo
## Étudiant
- Nathan PONCET
- Léo STEVENOT
## Fonctionnalités
- [x] Authentification

## Technologies
- Node ^16.20.0 | important d'utiliser la version 16.20.0
- Mongoose
- Mogodb
- Express
- Docker
  - App
  - Mongodb

## Installation
Installation des dépendances:
```bash
yarn install
```

Variables d'environment
```bash
cp .env.example .env
```

## Commandes
### Développement
```bash
yarn dev
```

### Production
```bash
yarn start
```

### Compilation .ts vers .js
```bash
yarn compile
```

### Compilation .ts vers .js en mode Watch
```bash
yarn compile:watch
```

### Docker:
```bash
# Développement
yarn docker:dev

# Production
yarn docker:prod
```

### Linting:
```bash
# ESLint
yarn lint

# Erreurs ESLint
yarn lint:fix

# Prettier
yarn prettier

# Prettier erreurs
yarn prettier:fix
```

### Fixtures
```shell
yarn seed
```

### Création d'un utilisateur
```shell
yarn create:user
```

## Fonctionalités
### Authentication
- register
- login
- logout
- refreshToken
- forgotPassword
- resetPassword

### Authorization
- Verif Role
- Verif user is owner of resource to update or delete

### CRUD
- CRUD User
- CRUD Recipe
- CRUD Nutrition
- Get Random Recipe

### Vérification de données
- Joi / utilisation de validateur pour chaque endpoint

### Documentation
- docs (swagger) (http://localhost:3000/v1/docs) - Seulement en mode développement
  [![name](../documentation/Capture%20d%E2%80%99%C3%A9cran%202023-07-12%20%C3%A0%2015.58.05.png)]

### Message d'erreur
#### Exemple
```json
{
  "code": 404,
  "message": "Not found"
}
```

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
├── modules
|   ├── *
|   |   ├── controller
|   |   ├── model
|   |   ├── router
|   |   ├── service
|   |   └── validation
├── routes
```
