import React, { Component } from 'react';
import './App.css';
import Card from "./components/card/Card";
import List from "./components/list/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card name="Flame of burnification" description="Dont play with matches" image="http://sf.co.ua/14/05/wallpaper-238879.jpg" rules="Pyromania" cost="1" power="3" toughness="0"></Card>
        <b>horizontal list</b>
        <List direction="horizontal"></List>
        <b>vertical list</b>
        <List direction="vertical"></List>
      </div>
    );
  }
}

export default App;
