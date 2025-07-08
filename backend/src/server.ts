import express from 'express';
import cors from 'cors';
import analyzeRouter from './routes/analyze';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('API is running. Use /api/hello or /api/analyze.');
});

app.use('/api/analyze', analyzeRouter);

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello from Express' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
