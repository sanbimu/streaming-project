import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

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
// app.use('/api', routes);

app.listen(3001, () => console.log(`Server started on port ${3001}`));