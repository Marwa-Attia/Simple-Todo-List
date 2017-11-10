// using ES6 modules
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// using CommonJS modules

import React from 'react';
import {render} from 'react-dom';
import EditToDo from './EditToDo';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

    
class App extends React.Component{
        
        render() {
          return  (<Switch>
          <Route exact path='/' component={TodoList}/>
          <Route path='/edit/:todo_id' component={EditToDo}/>
          <Route path='/add' component={AddTodo}/>        
        </Switch> 
                  )
        }

    }

ReactDOM.render((
  <BrowserRouter>
        <App/>
  </BrowserRouter>
), document.getElementById('root'));
