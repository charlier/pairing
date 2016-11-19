import React, { Component } from 'react';
import _ from 'lodash';
import './developer-create.css';

class DeveloperCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  renderError() {
    if (this.state.error) {
      return <p>{ this.state.error }</p>;
    }
    return null;
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this) }>
        <input type="text" ref="addButton" placeholder="Name" />
        <button type="submit">Add to rota</button>
        { this.renderError() }
      </form>
    )
  }

  componentDidMount() {
    this.refs.addButton.focus();
  }

  handleCreate(event) {
    event.preventDefault();

    const addButton = this.refs.addButton;
    const name = addButton.value;
    const validateInput = this.validateInput(name);

    if (validateInput) {
      this.setState({ error: validateInput });
      return false;
    }

    this.setState({ error: null });
    this.props.addDeveloper(name);
    this.refs.addButton.value = '';
  }

  validateInput(name) {
    if (!name) {
      return 'Please enter a name';
    } else if (_.find(this.props.developers, dev => dev.name === name)) {
      return 'Name already added';
    } else {
      return null;
    }
  }
}

export default DeveloperCreate
