import React from 'react'
import { Link } from 'react-router-dom'

const ExternalLink = (props) => (
  <a href={props.to} {...props} target="_blank" rel="noreferrer noopener">{props.children}</a>
)

const SubMenuItem = (props) => {
  const { item, loop, withsubmenus } = props
  const CustomLink = item.link ? ExternalLink : Link
  const path = item.path ? (item.path === 'homepage' ? '/' : `/${item.path}`) : item.link
  const loopIndex = loop
  //  TODO ↓
  const loopFirst = null
  const loopLast = null
  const isCurrent = null

  return (
    <li className={`index-${loopIndex
      }${item.path === ' homepage' ? ' menu-text' : ''
      }${loopFirst ? ' first' : ''
      }${loopLast ? ' last' : ''
      }${(item.submenu && withsubmenus) ? ' is-dropdown-submenu-parent' : ''
      }${isCurrent ? ' active' : ''}`
    }>

      <CustomLink to={path} title={item.title || null}>
        {item.label}
      </CustomLink>

      {(item.submenu && withsubmenus) &&
      <ul className="menu submenu vertical">
        {item.submenu.map((submenu, index) =>
          <SubMenuItem item={submenu} loop={loop} key={index} />
        )}
      </ul>
      }
    </li>
  )
}

export default SubMenuItem
