

let box = document.getElementById("")

fetch("http://localhost:3000/book_data")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            
        })
    })

