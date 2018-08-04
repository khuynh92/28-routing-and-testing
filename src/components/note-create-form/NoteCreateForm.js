import React, { Component } from 'react';

export default class NoteCreateForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Title:
          <br />
          <input value={this.props.title} onChange={this.props.handleChange} id='title' type="text" />
        </label>
        <br />
        <label>
          Notes:
          <br />
          <input value={this.props.content} onChange={this.props.handleChange} id='content' type="text" />
        </label>
        <input type="submit" />

      </form>
    );
  }
}