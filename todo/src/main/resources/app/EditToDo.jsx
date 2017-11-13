import React from 'react';
import {render} from 'react-dom';
import { Button } from 'reactstrap';

    
export default class EditToDo extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        this.state = {
                todo_id:props.match.params.todo_id,
            todo: {id:0 ,title:'',dueDate:'', done:false}
        }
        // Set initial state
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
        
        
        this.apiUrl = 'http://localhost:8080/todo/'
    }
    handleChange( event ) {


        const target = event.target;
        const value = target.value;
        const name = target.name;
        var temp= this.state.todo;
        if ( name === 'title' ) {
            temp.title=value;
            this.setState( {todo:temp });
        } else if ( name === 'dueDate' ) {
            temp.dueDate=value;
            this.setState( {todo:temp} );
        }

    }
    
    handleSubmit( event ) {
        console.log( JSON.stringify( this.state.todo ) );
        axios.put( this.apiUrl, this.state.todo )
            .then( function( response ) {
                console.log( response );
                history.back();
            } );
        event.preventDefault();


    }
    // Lifecycle method
    componentDidMount(){
        // Make HTTP reques with Axios
        axios.get(this.apiUrl+ this.state.todo_id)
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
                    <input type="text" value={this.state.todo.title}  name="title" id="title" class="form-control" onChange={this.handleChange}/>

                </div>
                <div class="form-group">
                    <label for="dueDate">DueDate:</label>

                    <input type="text" value={this.state.todo.dueDate}  name="dueDate" id="dueDate" class="form-control" onChange={this.handleChange}/>

                </div>
                <hr />
                <Button color="primary"  outline  onClick={() => this.handleSubmit()}>Submit</Button>
            </form>
        </div>
        </div>;
      }

    }