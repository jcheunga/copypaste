import React, { Component } from 'react'
import CopyContainer from './CopyContainer'
import Header from '../components/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CopyActions from '../actions/index';

class App extends Component {
  render() {
  	const { counter, addCopy, removeCopy } = this.props;
    return (
      <div className="container">
      	<Header counter={counter}/>
        <CopyContainer addcopy={addCopy} removecopy={removeCopy}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		counter: state.counter
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(CopyActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
