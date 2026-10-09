import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim().length === 0) {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: this.state.text
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      text: ''
    }));
  }

  render() {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>{this.props.title || 'My Todo List'}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{ padding: '8px', width: '70%', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '8px 12px' }}>
            Add
          </button>
        </form>
        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
          {this.state.todos.map((todo) => (
            <li key={todo.id} style={{ margin: '5px 0' }}>
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
