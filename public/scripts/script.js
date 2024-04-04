let query = `query queryBook($idBook:Int!){
    book(id:$idBook){
        id
        author
        genre
    }
}`


fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: { "idBook": 1 }
    })
})
    .then(resp => resp.json())
    .then(data => console.log(data.data.book));

query = `query getBooks($genre:String){
        books(genre:$genre){
          id
          title
          genre
          year
        }
      }`
fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: { "genre": "medieval" }
    })
})
    .then(resp => resp.json())
    .then(d => {
        console.log(d)
        //d.data.getBooks.forEach(book => console.log(book.id))
    })
    .catch(e => console.log(e));