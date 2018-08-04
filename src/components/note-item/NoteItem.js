import React, { Component } from 'react';

import './NoteItem.scss';

export default class NoteItem extends Component {

  handleClick = (e) => {
    this.props.removeNote(e.target.parentNode);
  }
  render() {
    return this.props.notes.map(note => (

      <li key={note.id} id={note.id}>
        <h4 className="note-title">{note.title}</h4>
        <button onClick={this.handleClick}>x</button>
        <p>{note.content}</p>
      </li>

    )
    );
  }

}
