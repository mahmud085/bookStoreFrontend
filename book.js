import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './components/App.js';
import bookList from './components/bookList.js';
import addBook from './components/addBook.js';
import store from './store';
ReactDOM.render((
	<Provider store={store}>
	   <Router history = {browserHistory}>
	      <Route path = "/" component = {App}>
	      	<IndexRoute component = {bookList} />
	        <Route path = "add" component = {addBook} />
	        <Route path = "books" component = {bookList} />
	      </Route>
	   </Router>
	 </Provider>
	
), document.getElementById('app'))