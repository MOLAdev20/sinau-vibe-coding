import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'node:url';
import helloRoute from './routes/helloRoute.js';
import productRoute from './routes/productRoute.js';

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());
app.use('/product', productRoute);

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

export default app;
