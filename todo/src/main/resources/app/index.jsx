// using ES6 modules
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
 
// using CommonJS modules

import React from 'react';
import {render} from 'react-dom';
import EditToDo from './EditToDo';
import TodoList from './TodoList';


    
class App extends React.Component{
        
        render() {
          return  (<Switch>
          <Route exact path='/' component={TodoList}/>
          <Route path='/edit' component={EditToDo}/>
        </Switch> 
                  )
        }

    }

ReactDOM.render((
  <BrowserRouter>
        <App/>
  </BrowserRouter>
), document.getElementById('root'));
