import { Link, useHistory } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import lorde from '../../assets/lorde.jpeg'

export default function SignedInMenu({ setAuth }: any) {
  
  // En el caso de que se tengan elementos como este (que no son generados con  un Route) se puede hacer uso del hook useHistory(); 

  const history = useHistory();

  function handleSignOut() {
    setAuth(false);
    history.push('/');

  }

  return (

    <Menu.Item position='right'>
      <Image avatar src={lorde}></Image>
      <Dropdown pointing='top right' text='Lorde'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link} to='/createEvent'
            icon='plus'
            text='Create event' />
          
          <Dropdown.Item
            icon='user'
            text='My profile' />
          <Dropdown.Item
            icon='power off'
            text='Sign out'
            onClick={handleSignOut}

          />
          
        </Dropdown.Menu>

      </Dropdown>
    </Menu.Item>
  )
}
