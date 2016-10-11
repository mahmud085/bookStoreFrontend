import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
var Main = React.createClass({  
   render() {
      return (
        <div>
          <nav className='navbar navbar-default navbar-fixed-top' role='navigation'>
            <div className='container-fluid'>
                <div className="navbar-header">
                  <a className="navbar-brand" href='/'>
                  <span className="glyphicon glyphicon glyphicon-home logo"></span>
                  Ekushe Boimela Book Store
                  </a>
                  </div>
                  <ul className='nav navbar-nav navbar-right'>
                    <li>
                      <Link to='add'>Add Book</Link>
                    </li>
                    <li>
                      <Link to='books'>Book List</Link>
                    </li>
                  </ul>
            </div>
          </nav>
          
				  <div>
           { React.cloneElement(this.props.children, this.props) }
           </div>
         </div>
      );
   }
});
export default Main;