const URI = 'http://localhost:3001/';

const get = async (endpoint) => {
  return await fetch(URI + endpoint)
    .then(response => response.json())
    .then(data => data);
}

const post = async (endpoint, payload) => {
  const postPayload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };
  
  return await fetch(URI + endpoint, postPayload)
    .then(response => response.json())
    .then(data => data);
}

const put = async (endpoint, payload) => {
  const putPayload = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };

  return await fetch(URI + endpoint, putPayload)
    .then(response => response.json())
    .then(data => data);
}

const remove = async (endpoint) => {
  const deletePayload = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return await fetch(URI + endpoint, deletePayload)
    .then(response => response.json())
    .then(data => data);
}

const base = { get, post, put, remove };

export default base;
