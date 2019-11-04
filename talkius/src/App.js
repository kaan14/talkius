import React, { Component } from 'react'
import './App.css'
import Header from "../src/components/Header"
import MainPageBody from '../src/components/MainPageBody'
import Language from './components/Languages'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    const avaliableLang = ['English', 'Spanish', 'Italian', 'Farsi', 'Latin', 'French']
    
    return (
      <div className="App">
        <Header />
        <MainPageBody />
        <Language langs={avaliableLang} />

      </div>
    );
  }
}

export default App;
