import axios from "axios";

export default {
  fetchTodos() {
    return new Promise((resolve, reject) => {
      let timeout = Math.round(Math.random() * 2 + 1);
      console.log(timeout);
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => {
          setTimeout(() => {
            resolve(response.data);
          }, timeout * 1000);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
};
