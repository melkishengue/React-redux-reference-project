import axios from "axios";

export default {
  fetchTodos() {
    return new Promise((resolve, reject) => {
      // simulated network latency
      let timeout = Math.round(Math.random() * 2 + 1);

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
