# ScubaLog backend
Backend for scubalog.io.

## Development
### Setup
To run the server locally, first create a file called dev.env.js in the app directory and edit the file to fit your connection details to the mongoDB database.
```
// app/dev.env.js

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
Create a file called prod.env.js, with the same structure as dev.env.js, in the app directory and simply run 

```
npm run prod
```
