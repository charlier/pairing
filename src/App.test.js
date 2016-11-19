import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('completely renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a top heading', () => {
  const wrapper = shallow(<App />);
  const welcomeMessage = <h1>Pairing Rota</h1>;
  expect(wrapper.contains(welcomeMessage)).toEqual(true);
});
