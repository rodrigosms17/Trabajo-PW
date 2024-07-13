import repository from '../repositories/product.js';

const findAll = (req, res) => {
    const result = repository.findAll();
    return sendResult(result, res);
}

const create = (req, res) => {
    const payload = req.body;
    const result = repository.create(payload);
    return sendResult(result, res);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = repository.findOne(id);
    return sendResult(result, res);
}

const remove = (req, res) => {
    const id = req.params.id;
    const result = repository.remove(id);
    return sendResult(result, res);
}

const update = (req, res) => {
    const product = req.body;
    const result = repository.update(product);
    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result) return res.status(200).json(result);
    return res.status(500).json({ message: 'No encontrado.' });
}

const controller = { findAll, create, findOne, remove, update };

export default controller;
