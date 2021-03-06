
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BooksList from './BooksList';
import Search from './Search';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.updateBooksList();
  }

  changeShelf = (id, newShelf) => {
    BooksAPI.update(id, newShelf)
      .then((data) => {
        // update state after successful database update
        this.setState((prevState) => {
          const index = prevState.books.findIndex(book => book.id === id);
          prevState.books[index].shelf = newShelf;
          return {
            books: prevState.books
          }
        });
      }    
    )
  }

  updateBooksList = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books
        });
      }
    );
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList 
            books={books} 
            onChangeShelf={this.changeShelf} />          
        )}/>
        <Route exact path='/search' render={() => (
          <Search
            books={books}  
            updateBooksList={this.updateBooksList} />          
        )}/>
      </div>
    )
  }
}

export default App