import model from '../models/product.js';

let products = [...model];

const findAll = () => {
    return products;
}

const create = (payload) => {
    products.push(payload);
    return payload;
}

const findOne = (id) => {
    const result = products.find(x => x.id === parseInt(id));
    return result;
}

const remove = (id) => {
    const index = products.findIndex(item => item.id == id);
    if (index > -1) {
        products.splice(index, 1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = products.findIndex(item => item.id == payload.id);
    if (index > -1) {
        products[index] = payload;
        return payload;
    } else return null;
}

const repository = { findAll, create, findOne, remove, update };

export default repository;
