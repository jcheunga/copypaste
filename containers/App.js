import React, { Component } from 'react'
import CopyContainer from './CopyContainer'
import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<Header />
        <CopyContainer />
      </div>
    )
  }
}
