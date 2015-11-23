import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return (
			<div>
			<Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="/">CopyPaste</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		    <NavItem>Number of snippets: {this.props.counter}</NavItem>		    	    
		    </Nav>
		  </Navbar>
		  </div>
		);
	}
}

Header.propTypes = {
	counter: PropTypes.number
};
