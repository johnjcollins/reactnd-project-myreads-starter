import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function Bookshelf(props) {
    const { title, books, onChangeShelf } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => <Book key={book.id} id={book.id} book={book} onChangeShelf={onChangeShelf}/>)}
                </ol>
            </div>
        </div>
    )
}

Bookshelf.PropTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Bookshelf;