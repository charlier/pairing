import React from 'react';
import { shallow } from 'enzyme';
import DeveloperCreate from './developer-create';

it('Shows a form with input box & button', () => {
  const wrapper = shallow(<DeveloperCreate />);
  expect(wrapper.find('form').length).toEqual(1);
  expect(wrapper.find('input').length).toEqual(1);
  expect(wrapper.find('button').text()).toEqual('Add to rota');
});

it('Displays errors', () => {
  const wrapper = shallow(<DeveloperCreate />);
  expect(wrapper.find('p').length).toEqual(0);
  wrapper.setState({error: 'geoff' });
  expect(wrapper.find('p').text()).toEqual('geoff');
});
