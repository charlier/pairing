import React from 'react';
import { shallow } from 'enzyme';
import DeveloperCount from './developer-count';

it('Shows a single digit for 1 person', () => {
  const div = shallow(<DeveloperCount developers='1' />);
  expect(div.text()).toEqual('1 developer in the rota.');
});

it('Shows pluralism', () => {
  const div = shallow(<DeveloperCount developers='' />);
  expect(div.text()).toEqual('0 developers in the rota.');
});
