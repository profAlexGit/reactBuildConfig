import React from 'react';
import { configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';

import { HomePage } from './home-page.jsx';
configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<HomePage />);
    expect(tree).toMatchSnapshot();
  });
});
