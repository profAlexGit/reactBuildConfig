import React from 'react';
import { configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';

import NotFoundPage from './not-found-page.jsx';
configure({ adapter: new Adapter() });

describe('<NotFound />', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<NotFoundPage />);
    expect(tree).toMatchSnapshot();
  });
});
