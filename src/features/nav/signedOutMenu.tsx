import { Menu, Button } from 'semantic-ui-react'


export default function SignedOutMenu({ setAuth }: any) {

  return (

    <Menu.Item position='right'>
      <Button inverted basic
        content='Login'
        style={{ marginRight: '0.5em' }}
        onClick={() => setAuth(true)}
      />
      <Button basic inverted content='Register'></Button>
    </Menu.Item>
  )
}
