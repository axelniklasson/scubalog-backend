# ScubaLog backend
Backend for scubalog.io.

## Development
### Setup
To run the server locally, first create a file called env.js in the app directory and edit the file to fit your connection details to the mongoDB database.
```
// app/env.js

process.env.MONGO_HOST = 'host';
process.env.MONGO_PORT = 'port';
process.env.MONGO_DATABASE = 'db';
process.env.MONGO_USER = 'user';
process.env.MONGO_PASS = 'pass';
```

### Run
```
npm install
npm run dev
```

## Production
The backend is hosted on Google App Engine.

### Setup
First, make sure to download the Google Cloud SDK and then create a file called ```app.yaml``` in the base directory.
```
// app.yaml

runtime: nodejs
env: flex
skip_files:
- data
- node_modules
- .git
- .DS_Store
- app/env.js

env_variables:
  MONGO_HOST: 'host'
  MONGO_PORT: 'port'
  MONGO_DATABASE: 'db'
  MONGO_USER: 'user'
  MONGO_PASS: 'pass'
```

### Deploy
Deployment to App Engine is very easy. Simply run ```gcloud app deploy``` and follow the instructions!
