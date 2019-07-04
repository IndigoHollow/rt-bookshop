import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import { store } from './store';
import * as actions from './actions';

import './index.css';

import TopMenu from './components/topMenu/TopMenu';
import BooksWrapper from './components/booksWrapper/BooksWrapper';
import EditBook from './components/editBook/EditBook';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <TopMenu />
        <Switch>
          <Route path="/" exact render={(routeProps) => ( <BooksWrapper books={this.props.books} /> )} />
          <Route path="/edit-book" render={(routeProps) => (
            <EditBook
              bookInfo={routeProps.location.state.bookInfo}
              status={routeProps.location.state.status}
              addNewBook={this.props.addNewBook}
              deleteBook={this.props.deleteBook}
              lastBookId={this.props.lastBookId}
              editBook={this.props.editBook}
            />
          )} />
        </Switch>
      </div>
    )
  }
}

// connect store with component
let mapStateToProps = state => {
    console.log('STATE:', state);
    return {
      books: state.books,
      lastBookId: state.books[state.books.length-1] && state.books[state.books.length-1].id,
    };
	}

let mapDispatchToProps = dispatch => {
	return {
    addNewBook: data => actions.addNewBook(data)(dispatch),
    deleteBook: id => actions.deleteBook(id)(dispatch),
    editBook: data => actions.editBook(data)(dispatch),
  }
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppConnected />
    </Router>
  </Provider>, document.getElementById('root'));
