import React, { Component, Fragment } from 'react';

import NoteCreateForm from '../note-create-form/NoteCreateForm.js';
import uuid from 'uuid/v4';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      newNote: {},
      notes: [],
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    let id = uuid();
    let content = e.target.value;
    this.setState({
      content: content,
      newNote:{
        id,
        content,
        editing: false,
        completed: false,

      },
    });
  }

  addNote = (e) => {
    e.preventDefault();
    console.log('pre', this.state);
    this.setState((prevState) => {
      return {
        contentmin: '',
        notes: [...prevState.notes, this.state.newNote]
      };
    }, () => console.log('post', this.state));
  }

  render() {
    return (
      <Fragment>
        <NoteCreateForm text={this.state.content} handleSubmit={this.addNote} handleChange={this.handleChange}/>
      </Fragment>

    );
  }
}