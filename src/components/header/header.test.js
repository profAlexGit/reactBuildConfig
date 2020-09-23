import React from 'react';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import { HeaderComponent } from './Header.jsx';
configure({ adapter: new Adapter() });

describe('<HeaderComponent />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <HeaderComponent />
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<HeaderComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('h1', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
