import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react'
import clockIcon from '../../assets/calendar.png'


export default function HomePage({history}: any) {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image src={clockIcon}></Image>
          One-vents
        </Header>
        <Button inverted size='huge' onClick={() => history.push('events')}>
          Get started!
          <Icon disabled name='arrow right' inverted />
        </Button>
      </Container>

    </Segment>
  )
}