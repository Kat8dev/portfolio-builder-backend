import express from 'express';
import * as dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import projectRoutes from './routes/project.js';
import stripeRoute from './routes/stripe.js';
import connectDB from './config/dbConnect.js';
import cors from 'cors';
// portfolio-builder?retryWrites=true&w=majority
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', projectRoutes);
app.use('/', stripeRoute);

app.listen(8080, () => {
  console.log('Backend server is running!');
});
