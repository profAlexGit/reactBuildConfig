import React from 'react';
import { configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';

import App from './app.jsx';
configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
