import products from '../models/product.js';

let productList = [...products];

const findAll = () => productList;

const create = (payload) => {
    productList.push(payload);
    return payload;
}

const findOne = (id) => productList.find(product => product.id === parseInt(id));

const remove = (id) => {
    const index = productList.findIndex(product => product.id === parseInt(id));
    if (index > -1) {
        productList.splice(index, 1);
        return true;
    }
    return false;
}

const update = (payload) => {
    const index = productList.findIndex(product => product.id === payload.id);
    if (index > -1) {
        productList[index] = payload;
        return payload;
    }
    return null;
}

const repository = { findAll, create, findOne, remove, update };

export default repository;
