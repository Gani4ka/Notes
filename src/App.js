import React, { Component } from "react";
import styles from "./App.module.css";
import TextArea from "./TextArea";

export default class App extends Component {
  debugger;

  state = {
    value: ""
  };
  appClasses = [styles.container];
  handlerChange = ({ target }) => {
    this.setState({
      value: target.value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={this.appClasses}>
        <h2>NotesApp</h2>
        <TextArea onChange={this.handlerChange} value={value} />
      </div>
    );
  }
}
