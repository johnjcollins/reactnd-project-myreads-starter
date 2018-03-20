import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
    const { id, book, onChangeShelf } = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf !== undefined ? book.shelf : "none"} onChange={(e) => onChangeShelf(id, e.target.value)}>
                            <option value="disabled" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors !== undefined ? book.authors.join(', ') : ''}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    id: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Book;