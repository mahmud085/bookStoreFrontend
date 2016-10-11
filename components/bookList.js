import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from '../store';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
var bookList = React.createClass({
	componentDidMount : function(){
		axios.get("http://localhost:3001/api")
		.then(function(response){
			console.log("Response = ",response.data);
			store.dispatch({
				type :'GET_BOOKS',
				payload : response
			})
			console.log("Store state ",store.getState());
		})
		.catch(function(err){
			console.log("Eroor =",err);
		})
	}, 	
	render(){
		return(
			<div>
			<h1>Book List</h1>
             <table className="table table-bordered">
              <thead><tr><td>Name</td><td>Writer</td><td>Publications</td><td>Category</td><td>Price</td><td>Release Date</td><td>Edition</td></tr></thead>
              <tbody>
                {this.props.books.map((result,i) => (
                  <tr key={i}>
                    <td>{result.name}</td>
                    <td>{result.writer}</td>
                    <td>{result.publications}</td>
                    <td>{result.category}</td>
                    <td>{result.price}</td>
                    <td>{result.releaseDate}</td> 
                    <td>{result.edition}</td>                  
                  </tr>
                ))}
              </tbody>
              </table> 
              </div>
		);
	}
});
export default bookList;