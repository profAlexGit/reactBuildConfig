import React from 'react';
import { configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';

import StatusCode from './status-code.jsx';
configure({ adapter: new Adapter() });

const props = {
  code: 301,
  children: <div />
};

describe('<StatusCode />', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<StatusCode {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
