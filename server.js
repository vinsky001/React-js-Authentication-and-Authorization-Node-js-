import express from 'express';
import mongoose from 'mongoose';
import userRouter from './server/routes/userRoutes';
import { verifyToken } from './server/middleware/verifyToken';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://vinsky:99iCloud@cluster0.omftxzi.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));