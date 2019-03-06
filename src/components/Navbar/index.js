import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'

class Nav extends React.Component {
  render() {
    return (
      <Navbar brand='Crypto Market' right className="blue-grey darken-4">
        <NavItem href='#'><Icon>search</Icon></NavItem>
        <NavItem href='#'><Icon>view_module</Icon></NavItem>
        <NavItem href='#'><Icon>refresh</Icon></NavItem>
        <NavItem href='#'><Icon>more_vert</Icon></NavItem>
      </Navbar>
    )
  }
}
export default Nav;