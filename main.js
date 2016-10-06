import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './components/App.js';
import bookList from './components/bookList.js';
import addBook from './components/addBook.js';

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
      	<IndexRoute component = {bookList} />
        <Route path = "add" component = {addBook} />
        <Route path = "books" component = {bookList} />
      </Route>
   </Router>
	
), document.getElementById('app'))