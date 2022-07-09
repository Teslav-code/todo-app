import React, { Component } from 'react';
import './app-header.css';

export default class AppHeader extends Component {

  render() {

    const{ toDo, done, search, term } = this.props;
  
   
    let classNames = '.app-header h2'; 
   
    if (term.length === 0) {
      classNames += ' term';
    }

  return (

    <div className="app-header d-inline">
      <h1 className="app-header h1">Todo List</h1>
      <div className="app-header d-sm-inline">
      <h2 className="app-header h2">{toDo} more to do, {done} done </h2>
      <h2 className={ classNames }> {search} tasks in search </h2>
      </div>
    </div>
  );
 };
};


