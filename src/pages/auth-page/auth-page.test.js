import React from 'react';
import { configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';

import { AuthPage } from './auth-page.jsx';
configure({ adapter: new Adapter() });

describe('<AuthPage />', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<AuthPage />);
    expect(tree).toMatchSnapshot();
  });
});
