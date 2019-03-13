import React from 'react'

import '../App.css'

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
  DropdownItem
} from 'reactstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar className='classNavBar' color='light' light expand='md'>
          <NavbarBrand className='NavBrand' href='/'>PIZZA DOUGH </NavbarBrand>
          <div className='profileImg'>
            <img src={this.props.picture} alt={this.props.name} />
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink tag={Link} to='/input' >Input</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/tiplist' >Track</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu className='nav-dropdown' right>
                  <DropdownItem className='nav-dropdown-item' tag={Link} to='/standings' >
                    Standings
                  </DropdownItem>
                  <DropdownItem className='nav-dropdown-item' tag={Link} to='/map' >
                    Map
                  </DropdownItem>
                  <DropdownItem className='nav-dropdown-item' href='#' onClick={this.props.clearState}>
                    Reset
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className='nav-dropdown-item' href='/' onClick={this.props.logOut}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

