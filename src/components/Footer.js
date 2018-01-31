import React from 'react'
import SubMenu from '../components/SubMenu'

const Footer = (props) => (
  <footer>
    <hr />

    <h4>Menu</h4>
    <SubMenu items={props.menuItems} />

    <hr />

    <h4>Search</h4>
    <form method="get" action="/search" id="searchform-inline" encType="text/plain">
        <input type="search" value="" placeholder="Search..." name="search" />
        <button type="submit">Search</button>
    </form>

    <hr />

    <p>
      This website is <a href="http://bolt.cm" target="_blank" title="Sophisticated, lightweight & simple CMS" rel="noopener noreferrer">Built with Bolt</a>.
    </p>
  </footer>
)

export default Footer
