import axios from 'axios';
import { getUserApi } from '../api/urls';

async function getUserFromServer(username, password) {
  try {
    const response = await axios.get(getUserApi(username, password));
    return response.data;
  } catch {
    alert('An Error occurred ');
  }
}

export { getUserFromServer };
