import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/3';

axios.get(url).then((response) => {
  console.log(response.data);
});
