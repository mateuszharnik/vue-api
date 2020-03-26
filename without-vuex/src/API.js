import axios from 'axios';

const URL = 'https://swapi.co/api';

export async function getData(data) {
  const resp = await axios.get(`${URL + data}`);
  return resp.data;
}

export async function getNextPage(data) {
  const resp = await axios.get(`${data}`);
  return resp.data;
}
