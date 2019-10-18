import axios from 'axios';

export default axios.create({
  // baseURL: `http://jsonplaceholder.typicode.com/`
  baseURL: `https://express-training.herokuapp.com/api/`,
  headers: {
    'Content-Type': 'application/json'
}
});
