const myPromise = new Promise((resolve, reject) => {});

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  // let responseFromServer;
  // let responseFromServer = true;
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data.");
  } else {
    reject("Data not received");
  }
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// makeServerRequest.then((result) => {
//   console.log(result);
// });

// makeServerRequest.catch((error) => {
//   console.log(error);
// });
