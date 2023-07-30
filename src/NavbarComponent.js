
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
  } from 'reactstrap';


import React, { Component } from 'react'

export default class NavbarComponent extends Component {
  render() {
    return (
        <div>
      <Navbar>
        <NavbarBrand href="/">NavBar</NavbarBrand>
        <NavbarToggler/>
      </Navbar>
    </div>
    )
  }
}
