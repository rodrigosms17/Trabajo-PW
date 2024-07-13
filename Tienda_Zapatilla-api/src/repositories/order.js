import model from '../models/order.js';
import userRepository from './user.js';
import productRepository from './product.js';

let orders = [...model];
let nroOrders = orders.length;

const findAll = () => {
    const newOrders = orders.map(item => ({
        ...item,
        user: userRepository.findOne(item.userId),
        products: item.products.map(product => ({
            ...product,
            details: productRepository.findOne(product.id)
        }))
    }));

    return newOrders;
}

const create = (payload) => {
    nroOrders++;
    payload.id = nroOrders;
    orders.push(payload);
    return payload;
}

const findOne = (id) => {
    const result = orders.find(x => x.id === parseInt(id));
    return result;
}

const remove = (id) => {
    const index = orders.findIndex(item => item.id == id);
    if (index > -1) {
        orders.splice(index, 1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = orders.findIndex(item => item.id == payload.id);
    if (index > -1) {
        orders[index] = payload;
        return payload;
    } else return null;
}

const repository = { findAll, create, findOne, remove, update };

export default repository;
