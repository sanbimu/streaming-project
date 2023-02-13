require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/trackRoutes');

const mongoString = process.env.DATABASE_URL;

//remove the warning
mongoose.set('strictQuery', false);
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })

const database = mongoose.connection;

database.on('error', (error) => console.error(error));
database.once('open', () => console.log('Connected to database'));

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(3001, () => console.log(`Server started on port ${3001}`));

// Loïc's code

const cookieSession = require('cookie-session');

const dbConfig = require('./config/db.config');

let corsOptions = {
  origin: 'http://localhost:8081'
};

app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: 'streaming-session',
    secret: "COOKIE_SECRET",
    httpOnly: true,
  })
);

const db = require('./model');
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initial();
  })
  .catch(err => {
    console.error('Connection error', err);
    process.exit();
  });

// simple route

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to streaming application.' });
});

// routes

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user'
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log('added \'user\' to roles collection');
      });

      new Role({
        name: 'moderator'
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log('added \'moderator\' to roles collection');
      });

      new Role({
        name: 'admin'
      }).save(err => {
        if (err) {
          console.log('error', err);
        }

        console.log('added \'admin\' to roles collection');
      });
    }
  });
}