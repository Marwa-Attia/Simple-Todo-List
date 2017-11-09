class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tilte: '',dueDate:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({tilte: event.target.value});
  }
  handleDueDateChange(){
      this.setState({dueDate: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tilte:
          <input type="text" value={this.state.tilte} onChange={this.handleTitleChange} />
        </label>
              <label>
              DueDate:
              <input type="text" value={this.state.dueDate} onChange={this.handleDueDateChange} />
            </label>      
        <input type="submit" value="Submit" />
      </form>
    );
  }
}