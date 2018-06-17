import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class NavBarToggle extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">PIZZA DOUGH</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink tag={Link} to="/" onClick={this.toggleNavbar}>Input</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/tiplist" onClick={this.toggleNavbar}>Track</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/map" onClick={this.toggleNavbar}>Map</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={this.props.clearState}>Reset</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
            
        </div>
    );
  }
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}



