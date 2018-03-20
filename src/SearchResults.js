import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function SearchResults(props) {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {props.searchResults !== undefined && props.searchResults.map((book) => <Book key={book.id} id={book.id} book={book} onChangeShelf={props.onChangeShelf}/>)}
            </ol>
        </div>
    )    
}

SearchResults.PropTypes = {
    searchResults: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default SearchResults;