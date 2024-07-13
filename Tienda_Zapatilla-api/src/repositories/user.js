import model from '../models/user.js';

let users = [...model];

const findAll = () => {
    return users;
}

const create = (payload) => {
    users.push(payload);
    return payload;
}

const findOne = (id) => {
    const result = users.find(x => x.id === parseInt(id));
    return result;
}

const remove = (id) => {
    const index = users.findIndex(item => item.id == id);
    if (index > -1) {
        users.splice(index, 1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = users.findIndex(item => item.id == payload.id);
    if (index > -1) {
        users[index] = payload;
        return payload;
    } else return null;
}

const repository = { findAll, create, findOne, remove, update };

export default repository;
