import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  render() {

    const header = this.props.title
      ? <header className="App-header">
          <h1 className="App-title">{this.props.title}</h1>
        </header>
      : null;


    const items1 = ['foo', 'bar', 'baz'];

    const items2 = ['Lorem', 'ipsum', 'dolor'];

    return (
      <div className="App">
        {header}
        <p className="App-intro">
          App Introduction
        </p>
        <h2>First List</h2>
        <List items={items1} />
        <h2>Second List</h2>
        <List items={items2} />
      </div>
    );
  }
}