import React, { Component, PropTypes } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

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
		    </Nav>
		  </Navbar>
		  </div>
		);
	}
}
