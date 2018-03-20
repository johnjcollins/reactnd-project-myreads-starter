import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SearchBar(props) {
    return (
        <div className="search-books-bar">
            <Link
                to='/'
                className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    onChange={(e) => props.onChangeQuery(e.target.value)} 
                    placeholder="Search by title or author"
                    value={props.query} 
                />
            </div>
        </div>
    )
}

SearchBar.PropTypes = {
    query: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default SearchBar;