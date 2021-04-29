import React, { Component, useState } from 'react';
import { Container, Menu, Button } from 'semantic-ui-react'

interface MenuItem {
  name?: string
  active?: boolean
}

export default function Navbar({ setFormState }: any) {

  const [currentItem, setItemState] = useState('events');
  const handleItemClick = (e: any, { name }: any) => {
    setItemState(name);
    setFormState(false);
  };

  const openForm = (e: any, { name }: any) => {
    handleItemClick(e, name)
    setFormState(true)
  }

  return (
    <Menu fixed="top" inverted id="navbarTop">
      <Container>
        <Menu.Item header>
          Re-events
        </Menu.Item>
        <Menu.Item
          name='events'
          active={currentItem === 'events'}
          onClick={handleItemClick}
        >

        </Menu.Item>
        <Menu.Item
          name='create event'
          active={currentItem === 'create event'}
          onClick={openForm}
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button inverted basic content='Login'></Button>
          </Menu.Item>
          <Menu.Item>
            <Button basic inverted content='Register'></Button>
          </Menu.Item>

        </Menu.Menu>
      </Container>
    </Menu>

  )
}
