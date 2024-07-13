import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRouter from './src/routes/user.js';
import orderRouter from './src/routes/order.js';
import productRouter from './src/routes/product.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ message: "Hello World", code: "201" });
});

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/product', productRouter);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
