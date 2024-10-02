var url = "https://reqres.in/api/users";

/*
fetch(url, {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            name: "morpheus",
            job: 'leader'
        }
    )
})
.then(response => response.json())
.then(data => console.log(data))
*/

/*
axios
  .post(url, {
    name: "morpheus",
    job: "leader",
  })
  .then((data) => console.log(data));
*/


/*
fetch(url + '/x')
.then(response => console.log(response))
.catch(error => console.log('Error : ' + error))
*/

axios(url + '/x')
.then(response => consoel.log(response))
.catch(error => console.log('Error : ' + error))