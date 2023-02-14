require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const trackRoutes = require('./routes/trackRoutes');
const userRoutes = require('./routes/userRoutes');
const resetPasswordRoute = require('./routes/resetPasswordRoute');

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
app.use('/track', trackRoutes);
app.use('/user', userRoutes);
app.use('/reset-password', resetPasswordRoute);

app.listen(3001, () => console.log(`Server started on port ${3001}`));
