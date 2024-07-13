import users from '../models/user.js';

let userList = [...users];

const findAll = () => userList;

const create = (payload) => {
    userList.push(payload);
    return payload;
}

const findOne = (id) => userList.find(user => user.id === parseInt(id));

const remove = (id) => {
    const index = userList.findIndex(user => user.id === parseInt(id));
    if (index > -1) {
        userList.splice(index, 1);
        return true;
    }
    return false;
}

const update = (payload) => {
    const index = userList.findIndex(user => user.id === payload.id);
    if (index > -1) {
        userList[index] = payload;
        return payload;
    }
    return null;
}

const repository = { findAll, create, findOne, remove, update };

export default repository;
