import React, { Component } from 'react';
import './app-header.css';

export default class AppHeader extends Component {
  

  render() {

    const{ toDo, done, search, count } = this.props;

    let classNames = '.app-header h2 hidden'; 
       
       if (search) {
        classNames = classNames.replace(' hidden', '')
        } 
        
    return (

      <div className="app-header d-inline">
        <h1 className="app-header h1">Todo List</h1>
        <div className="app-header d-sm-inline">
        <h2 className="app-header h2">{toDo} more to do, {done} done </h2>
       <h2 className={ classNames }> {count} tasks in search </h2>
       </div>
      </div>
    );
  };
};


