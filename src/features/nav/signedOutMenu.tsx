import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalActions';
import LoginForm from '../auth/loginForm';


export default function SignedOutMenu() {
  const dispatch = useDispatch();

  return (

    <Menu.Item position='right'>
      <Button inverted basic
        content='Login'
        style={{ marginRight: '0.5em' }}
        onClick={() => dispatch(openModal({ modalType: 'LoginForm', modalProps: LoginForm }))}
      />
      <Button basic inverted content='Register'></Button>
    </Menu.Item>
  )
}
