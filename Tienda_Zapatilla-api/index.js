import express from 'express';
import userRoutes from './src/routes/user.js';
import orderRoutes from './src/routes/order.js';
import productRoutes from './src/routes/product.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
