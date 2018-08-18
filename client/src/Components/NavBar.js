import React from 'react'
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
        <Navbar color='light' light expand='md'>
          <NavbarBrand className='NavBrand' href='/'>PIZZA DOUGH </NavbarBrand>
          <div className='profileImg'>
            <img src={this.props.picture} alt={this.props.name} />
          </div>  
          <NavbarToggler onClick={this.toggle} />         
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>  
              <NavItem>
                <NavLink tag={Link} to='/input' onClick={this.toggle}>Input</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/tiplist' onClick={this.toggle}>Track</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to='/standings' onClick={this.toggle}>
                    Standings
                  </DropdownItem>
                  <DropdownItem tag={Link} to='/map' onClick={this.toggle}>
                    Map
                  </DropdownItem>
                  <DropdownItem href='#' onClick={this.props.clearState}>
                    Reset
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href='/' onClick={this.props.logOut}>
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

