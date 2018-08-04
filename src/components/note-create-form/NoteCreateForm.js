import React, { Component } from 'react';

export default class NoteCreateForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          <input value={this.props.text} onChange={this.props.handleChange} id='note' type="text"/>
          <input type="submit"/>
        </label>
      </form>
    );
  }
}