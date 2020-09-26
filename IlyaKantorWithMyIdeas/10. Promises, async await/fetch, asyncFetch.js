//просто fetch запрос
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(`ERR is ${err.name} AND ${err.message}`))

//fetch with async

let f = async (link) => {
    let get = await fetch(link);
    let response = await get.json();
    console.log(response);
}