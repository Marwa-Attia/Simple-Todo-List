import React from 'react';
import {render} from 'react-dom';
import { Button } from 'reactstrap';

    
export default class EditToDo extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
                todo_id:props.match.params.todo_id,
            todo: {id:0 ,title:'',dueDate:'', done:false}
        }
        
        this.apiUrl = 'http://localhost:8080/todo/'+ this.state.todo_id
    }

    // Lifecycle method
    componentDidMount(){
        // Make HTTP reques with Axios
        axios.get(this.apiUrl)
            .then((res) => {
                // Set state with result
                console.log(res.data.results);
                this.setState({todo:res.data.results});
                console.log(JSON.stringify(this.state));
        });
    }
    render() {
        return <div> <h1>Edit Todo</h1>
        <hr />
        <div>
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="title">Tilte:</label>
                    <input type="text" value={this.state.todo.title}  name="title" id="title" class="form-control" />

                </div>
                <div class="form-group">
                    <label for="dueDate">DueDate:</label>

                    <input type="text" value={this.state.todo.dueDate}  name="dueDate" id="dueDate" class="form-control" />

                </div>
                <hr />
                <Button color="primary"  outline  >Submit</Button>
            </form>
        </div>
        </div>;
      }

    }