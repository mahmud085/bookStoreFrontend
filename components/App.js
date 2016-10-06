import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
var App = React.createClass({  
   render() {
      return (
        <div>
          <nav className='navbar navbar-default navbar-fixed-top' role='navigation'>
            <div className='container-fluid'>
                <div className="navbar-header">
                  <a className="navbar-brand" href='/'>
                  <span className="glyphicon glyphicon glyphicon-home logo"></span>
                  Todo
                  </a>
                  <ul className='nav navbar-nav navbar-right'>
                    <li>
                      <Link to='add'>Add Book</Link>
                    </li>
                    <li>
                      <Link to='books'>Book List</Link>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
          
				  <div>
           {this.props.children}
           </div>
         </div>
      );
   }
});
export default App;