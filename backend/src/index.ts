import express, {Express, Request, Response} from 'express'
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app:Express = express();

app.use(cors());
app.use(express.json());

// Global error handler
app.use(errorHandler);

app.use("/api/users", userRoutes);

app.get('/', (req:Request, res:Response) => {
    res.send('Working')
})

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
}); 