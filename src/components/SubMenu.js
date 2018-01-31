import React from 'react'
import SubMenuItem from '../components/SubMenuItem'

const SubMenu = (props) => {
  const items = props.items || []

  return (
    <ul className={`menu ${props.class || ''}`}>
      {items.map((item, index) =>
        <SubMenuItem
          key={index}
          item={item}
          loop={index}
          extraclass={props.extraclass}
          withsubmenus={props.withsubmenus || true}
        />
      )}
    </ul>
  )
}

export default SubMenu
