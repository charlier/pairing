import React, { Component } from 'react';
import _ from 'lodash';
import DeveloperCreate from './components/developer-create';
import PairingRota from './components/pairing-rota';
import './App.css';

const developers = [ ];

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            developers: developers
        }
    }

    render() {
        return (
            <div>
                <h1>Pairing Rota</h1>
                <PairingRota
                    developers={ this.state.developers }
                />
                <DeveloperCreate
                    developers={ this.state.developers }
                    addDeveloper={ this.addDeveloper.bind(this) }
                />
            </div>
        )
    }

    addDeveloper(name) {
        this.state.developers.push({ name });
        this.setState({ developers: this.state.developers });
    }
}
