import React from 'react';
import renderer from 'react-test-renderer';

import NoteCreateForm from '../../../../src/components/note-create-form/NoteCreateForm.js';

describe('<Dashboard/> Enzyme Test', () => {
  it('loads components at application start', () => {
    let app = shallow(<NoteCreateForm/>);
    expect(app.find('form').exists()).toBeTruthy();
  });
});

describe('<Dashboard/> Snapshot Test', () => {
  it('renders correctly', () => {
    const component = renderer.create(<NoteCreateForm />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});


