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
