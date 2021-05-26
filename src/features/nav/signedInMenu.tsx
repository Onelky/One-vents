import { Link, useHistory } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import {  RootStateOrAny, useDispatch, useSelector } from 'react-redux'; import { signOut } from '../auth/authActions';
import userImg from '../../assets/user.png'


export default function SignedInMenu() {

  // En el caso de que se tengan elementos como este (que no son generados con  un Route) se puede hacer uso del hook useHector y(); 
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser} = useSelector((state: RootStateOrAny) => state.auth)

  function handleSignOut(){ 
    dispatch(signOut())
    history.push('/');

  }

  return (

    <Menu.Item position='right'>
      <Image avatar src={currentUser.photoUrl || userImg}></Image>
      <Dropdown pointing='top right' text={currentUser.email}>
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
