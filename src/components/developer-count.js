import React, { Component } from 'react';
import _ from 'lodash';

class DeveloperCount extends Component {
  renderCount() {
    const developers =  _.size(this.props.developers);
    return developers + ' developer' + (developers === 1 ? '' : 's') + ' in the rota.';
  }

  render(){
    return <p>{ this.renderCount() }</p>
  }

}

export default DeveloperCount
