import React, { Component } from 'react';
import _ from 'lodash';
import DeveloperCount from './developer-count';
import DeveloperList from './developer-list';

class PairingRota extends Component {

    pairUp() {
        const team = this.props.developers;
        const pairs = [];
        const teamSize = team.length;
        for (let i = 0; i < teamSize; ++i) {
            for (let j = i + 1; j< teamSize; ++j) {
                pairs.push({name: `${team[i].name} and ${team[j].name}`});
            }
        }
        return pairs;
    }

    renderRota() {
        const props = _.omit(this.props, 'developers');
        const pairs = this.pairUp();
        return _.map(pairs, (pair, index) => <DeveloperList key={index} {...pair} {...props} />);
    }

    render() {
        return (
            <div>
                <DeveloperCount developers={ this.props.developers }/>
                <h2>Pairs:</h2>
                <ul>
                    { this.renderRota() }
                </ul>
            </div>
        )
    }
}

export default PairingRota
