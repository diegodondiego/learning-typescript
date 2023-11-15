import axios from 'axios';

let id = "1";

if (process.argv[2] && process.argv[2] == "--id") {
  id = process.argv[3];
}

const url = 'https://jsonplaceholder.typicode.com/todos/' + id;

axios.get(url).then((response) => {
  console.log(response.data);
});
