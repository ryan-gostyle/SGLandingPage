import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="#fff" style={{backgroundColor:'#4F3948'}} dark expand="md">
          <NavbarBrand href="/"><img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/stylegenie_white.png" alt=''  style={{width: 'auto',height: '75px',left: '33px'}} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/how-it-works">HOW IT WORKS</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                CHANGE COUNTRY
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <a href="/indonesia" className="dropdown-navlink-color">Indonesia</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/malaysia" className="dropdown-navlink-color">Malaysia</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://stylegenie.ph" className="dropdown-navlink-color">Philippines</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/singapore" className="dropdown-navlink-color">Singapore</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header