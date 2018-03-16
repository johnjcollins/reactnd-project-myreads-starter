import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

function BooksList(props) {
    const { books } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                <Bookshelf title='Currently Reading' books={books.filter(book => book.shelf === 'currentlyReading')} />
                <Bookshelf title='Want to Read' books={books.filter(book => book.shelf === 'wantToRead')} />
                <Bookshelf title='Read' books={books.filter(book => book.shelf === 'read')} />
                </div>
            </div>
            <div className="open-search">
                <Link
                    to='/search'
                >Add a book</Link>
            </div>
        </div>
    )
}

export default BooksList;