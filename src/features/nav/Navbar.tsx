import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Item } from 'semantic-ui-react'
import clockIcon from '../../assets/calendar.png'
import SignedOutMenu from './signedOutMenu'
import SignedInMenu from './signedInMenu'


export default function Navbar() {

  const [authenticated, setAuth] = useState(false);

  return (
    <Menu fixed="top" inverted id="navbarTop">
      <Container>

        <Menu.Item

          as={NavLink} exact to='/'
          content="onEvents"
          header>
          <Item.Image src={clockIcon} size='mini'></Item.Image>
          <Item.Header>One-vents</Item.Header>

        </Menu.Item>

        <Menu.Item
          name='events'
          as={NavLink} to='/events'
        />
        <Menu.Item
          name='sandbox'
          as={NavLink} to='/sandbox'
        />

        {
          authenticated &&
          <Menu.Item
            name='create event'
            as={NavLink} to='/createevent'
          />
        }


        {authenticated
          ? <SignedInMenu setAuth={setAuth} />
          : <SignedOutMenu setAuth={setAuth} />}

      </Container>
    </Menu>

  )
}
