
import { Redirect } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'reactstrap';

export default class AddTodo extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { title: '', dueDate: '', done: false };

        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
        this.apiUrl = 'http://localhost:8080/todo'

    }

    handleChange( event ) {


        const target = event.target;
        const value = target.value;
        const name = target.name;
        if ( name === 'title' ) {
            this.setState( { title: value } );
        } else if ( name === 'dueDate' ) {
            this.setState( { dueDate: value } );
        }

    }
    
    handleSubmit( event ) {
        console.log( JSON.stringify( this.state ) );
        axios.post( this.apiUrl, this.state )
            .then( function( response ) {
                console.log( response );
                history.back();
            } )
        event.preventDefault();


    }

    render() {
        return (
            <div>
                <h1>Add Todo</h1>
                <hr />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="title">Tilte:</label>
                            <input type="text" value={this.state.title} onChange={this.handleChange} name="title" id="title" class="form-control" />

                        </div>
                        <div class="form-group">
                            <label for="dueDate">DueDate:</label>

                            <input type="text" value={this.state.dueDate} onChange={this.handleChange} name="dueDate" id="dueDate" class="form-control" />

                        </div>
                        <hr />
                        <Button color="primary"  outline onClick={() => this.handleSubmit()} >Submit</Button>
                    </form>
                </div>
            </div>
        );
    }
}