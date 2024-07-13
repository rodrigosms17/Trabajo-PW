import orders from '../models/order.js';
import userRepository from './user.js';
import productRepository from './product.js';

let orderList = [...orders];
let nroOrders = orderList.length;

const findAll = () => {
    return orderList.map(order => ({
        ...order,
        user: userRepository.findOne(order.user.id),
        products: order.products.map(product => productRepository.findOne(product.id))
    }));
}

const create = (payload) => {
    nroOrders++;
    payload.id = nroOrders;
    orderList.push(payload);
    return payload;
}

const findOne = (id) => orderList.find(order => order.id === parseInt(id));

const remove = (id) => {
    const index = orderList.findIndex(order => order.id === parseInt(id));
    if (index > -1) {
        orderList.splice(index, 1);
        return true;
    }
    return false;
}

const update = (payload) => {
    const index = orderList.findIndex(order => order.id === payload.id);
    if (index > -1) {
        orderList[index] = payload;
        return payload;
    }
    return null;
}

const repository = { findAll, create, findOne, remove, update };

export default repository;
