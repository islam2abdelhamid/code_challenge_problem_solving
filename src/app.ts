import express from 'express';
import ordersRoute from './routes/orders';
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/orders-statistics', ordersRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
