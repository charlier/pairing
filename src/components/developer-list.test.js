import React from 'react';
import { shallow } from 'enzyme';
import DeveloperList from './developer-list';

it('Creates an LI', () => {
  const wrapper = shallow(<DeveloperList name="eric" />);
  expect(wrapper.name()).toEqual('li');
});

it('Contains the pairs name', () => {
  const wrapper = shallow(<DeveloperList name="eric" />);
  expect(wrapper.text()).toEqual('eric');
});
