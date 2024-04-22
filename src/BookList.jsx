import React from 'react'

const BookList = (props) => {
  return (
    <div>
      <h1>Book Tital is :{props.booksdata.booktitle} </h1>
      <h1>Book bookdescription is :{props.booksdata.bookdescription} </h1>

    </div>
  )
}

export default BookList
