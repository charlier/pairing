import React from 'react';
import { shallow } from 'enzyme';
import PairingRota from './pairing-rota';
import DeveloperList from './developer-list';

it('Loads no lists for 0 people', () => {
  const wrapper = shallow(<PairingRota developers='' />);
  expect(wrapper.find(DeveloperList).length).toEqual(0);
});

it('Loads no lists for 1 person', () => {
  const wrapper = shallow(<PairingRota developers='1' />);
  expect(wrapper.find(DeveloperList).length).toEqual(0);
});

it('Loads 1 lists for 2 people', () => {
  const wrapper = shallow(<PairingRota developers='01' />);
  expect(wrapper.find(DeveloperList).length).toEqual(1);
});
