import React, { Component } from 'react';
import './developer-list.css';

class DeveloperList extends Component {

  render() {
    const { name } = this.props;
    return (
      <li>
        { name }
      </li>
    )
  }

}

export default DeveloperList
