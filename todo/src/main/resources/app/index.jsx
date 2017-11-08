var style={
		display: 'inline'
	};
	const Todo = ({todo}) => {
  		// Each Todo
  		return (
			<div style={style}>
				<div ><a href="#" className="list-group-item" >{todo.title}</a></div>

			</div>
		);
	}

	class TodoApp extends React.Component{
  		constructor(props){
    		// Pass props to parent class
    		super(props);
    		// Set initial state
    		this.state = {
      			data: []
    		}
    		this.apiUrl = 'http://localhost:8080/todo'
  		}
  
		// Lifecycle method
  		componentDidMount(){
    		// Make HTTP reques with Axios
    		axios.get(this.apiUrl)
      			.then((res) => {
        			// Set state with result
        			this.setState({data:res.data.results});
      		});
  		}
		render() {
			var todos = this.state.data;
			console.log(todos);
    		return (
				<div><h1> TODO items </h1><hr/>
                	{todos.map(function(todo, id){
                    	return <Todo key={ id } todo={todo} />;
                  	})}
            	</div>
				);
  		}

	}

	ReactDOM.render(
  		<TodoApp />, document.getElementById('root')
	);