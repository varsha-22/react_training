import axios from 'axios';

export default axios.create({
  baseURL: `https://express-training.herokuapp.com/api/`,
  headers: {
    'Content-Type': 'application/json'
}
});
