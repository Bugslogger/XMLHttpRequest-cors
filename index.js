import XhrApiCall from "./xmlhttprequest";


// XhrApiCall(method, url, body)
// for GET Method body param is not required
// XhrApiCall() Method returns promise

XhrApiCall("GET", "https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
