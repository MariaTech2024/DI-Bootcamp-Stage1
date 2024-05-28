import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import users_router from './routes/userRouter.js';

dotenv.config();

const app = express();

app.use(cors(
  {
    origin: 'http://localhost:5173',
        credentials: true,
  }
));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/users', users_router);