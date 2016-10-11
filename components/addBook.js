import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from '../store';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
var addBook = React.createClass({
	handleSubmit : function(e){
		e.preventDefault();
		//console.log("name ",this.refs.name.value );
		var data = {
			name : this.refs.name.value,
			writer : this.refs.writer.value,
			publications : this.refs.publications.value,
			category : this.refs.category.value,
			price : this.refs.price.value,
			releaseDate : this.refs.releaseDate.value,
			edition : this.refs.edition.value
		};
		axios.post("http://localhost:3001/api",data)
		.then(function(response){
			console.log("Response = ",response.data);
			store.dispatch({
				type :'ADD_BOOK',
				payload: response.data
			})
			console.log("Store at add state ",store.getState());
			this.clearForm();
			//location.href = '/';
		})
		.catch(function(err){
			console.log("Eroor =",err);
		})

	},
	clearForm : function(){
		console.log("here");
		this.refs.name.value = " ",
		this.refs.writer.value = " ",
		this.refs.publications.value = " ",
		this.refs.category.value = "",
		this.refs.price.value = "",
		this.refs.releaseDate.value = "",
		this.refs.edition.value = ""
	},
	render(){
		    var style = {
      color: 'red',
      fontSize: 30,
      marginLeft : '40%'
    };
		return(
			<div className='jumbotron'>
			<h3 style={style}>Add Book in Store </h3>
		      <form className="form-horizontal" onSubmit={this.handleSubmit}>
		              <div className="form-group">
		                <label className="control-label col-sm-4 lbl" >Name  :</label>
		                <div className="col-sm-6">
		                    <input type='text' className="form-control" ref='name' placeholder="Enter Book Name"/>
		                </div>
		              </div>
		              <div className="form-group">
		                <label className="control-label col-sm-4 lbl">Writer  :</label>
		                <div className="col-sm-6">
		                    <input type='text' className="form-control" ref='writer' placeholder="Enter Writer Name"/>
		                </div>
		              </div>
		              <div className="form-group">
		                <label className="control-label col-sm-4 lbl">Publications  :</label>
		                <div className="col-sm-6">
		                    <input type='text' className="form-control" ref='publications' placeholder="Publications"/>
		                </div>
		              </div>
		              <div className="form-group">
		                <label className="control-label col-sm-4 lbl" >Category  :</label>
		                <div className="col-sm-6">
		                	  <select className="form-control" ref='category' id="sel1">
							    <option>Story</option>
							    <option>History</option>
							    <option>Poem</option>
							    <option>Novel</option>
							    <option>Essay</option>							    
							  </select>
		                </div>
		              </div>
		              <div className="form-group">
		                <label className="control-label col-sm-4 lbl">Price  :</label>
		                <div className="col-sm-6">
		                    <input type='text' className="form-control" ref='price' placeholder="Enter Book Price"/>
		                </div>
		              </div>
		              <div className="form-group">
		                <label className="control-label col-sm-4 lbl">Release Date  :</label>
		                <div className="col-sm-6">
		                    <input type='text' className="form-control" ref='releaseDate' placeholder="Enter Date i.e 27-09-2016"/>
		                </div>
		              </div>
		              <div className="form-group">
		                <label className="control-label col-sm-4 lbl">Edition  :</label>
		                <div className="col-sm-6">
		                    <input type='text' className="form-control" ref='edition' placeholder="Enter Edition"/>
		                </div>
		              </div>
		              <div className="form-group">
		                <div className="col-sm-offset-4">
		                  <input type='submit' value='Add'/>
		                </div>
		              </div>
		      </form>
		     </div>
		);
	}
});
export default addBook;