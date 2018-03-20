import React from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

function BooksList(props) {
    const { books, onChangeShelf } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Bookshelf title='Currently Reading' books={books.filter(book => book.shelf     === 'currentlyReading')} onChangeShelf={onChangeShelf} />
                <Bookshelf title='Want to Read' books={books.filter(book => book.shelf ===      'wantToRead')} onChangeShelf={onChangeShelf} />
                <Bookshelf title='Read' books={books.filter(book => book.shelf === 'read')}     onChangeShelf={onChangeShelf} />
            </div>
            <div className="open-search">
                <Link
                    to='/search'
                >Add a book</Link>
            </div>
        </div>
    )
}

BooksList.PropTypes = {
    books: PropTypes.array.isRequired,
    updateBooksList: PropTypes.func.isRequired
}

export default BooksList;