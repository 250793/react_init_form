import axios from 'axios'
import React from 'react'

export default function BookList() {

    const getBooks = () => {
        axios.get('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books')
            .then(response => console.log(response))
            .catch(error => console.log(error))

    }
    getBooks()

    return (
        <div>BookList</div>
    )
}
