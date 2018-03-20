import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBooksList: PropTypes.func.isRequired
    }

    state = {
        error: null,
        query: '',
        searchResults: []
    }

    changeQuery = (query) => {
        this.setState({
            query: query
        });
        if (query !== '') {
            BooksAPI.search(query)
                .then((books) => {
                    this.setState((previous) => {
                        for (const book of this.props.books) {
                            let index = books.findIndex(searchResultBook => searchResultBook.id === book.id );
                            if (index !== -1) {
                                books[index].shelf = book.shelf;
                            }
                        }
                        return {
                            searchResults: books
                        }
                    });
                },
                (error) => {
                    this.setState({
                        error,
                        searchResults: []
                    });             
                })
        } else {
            this.setState({
                searchResults: []
            });
        }             
    }

    changeShelf = (id, newShelf) => {
        BooksAPI.update(id, newShelf)
            .then((data) => {
                this.setState((prevState) => {
                    const index = prevState.searchResults.findIndex(book => book.id === id);
                    prevState.searchResults[index].shelf = newShelf;
                    return {
                        books: prevState.searchResults.books
                    }
                    });
                this.props.updateBooksList();
            },
            (error) => {
                this.setState({
                    error
                })
            }
        );
    }
    
    render() {
        const { error, query, searchResults} = this.state;
        if (error) {
            <div>Error: {error.message}</div>
        } else {
            return (
                <div className="search-books">
                    <SearchBar query={query} onChangeQuery={this.changeQuery} />
                    <SearchResults searchResults={searchResults} onChangeShelf={this.changeShelf}/>
                </div>
            )
        }
    }
}

export default Search;