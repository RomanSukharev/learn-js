const requestURL = 'https://jsonplaceholder.typicode.com/users'; // запрос

// function sendRequest(method, URL, body = null) {
//   return fetch(URL).then(response => {
//     return response.json();
//   });
// };


//GET
// sendRequest('GET', requestURL)
//   .then((data) => console.log(data)
//     .catch((error) => console.log(error))); 



// POST
function sendRequestSecond(method, URL, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  };

  return fetch(URL, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.status) {
      return response.json();
    }

    return response.JSON()
      .then(error => {
        const e = new Error('Ошибка на сервере :(');
        e.data = error;
        throw e;
      });

  });
};

const body = {
  name: 'Roma',
  age: 21
};

//  POST
sendRequestSecond('POST', requestURL, body)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));