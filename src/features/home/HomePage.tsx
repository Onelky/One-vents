import { Segment, Container, Header, Grid, Image, Button, Icon } from 'semantic-ui-react'
import clockIcon from '../../assets/calendar.png'


export default function HomePage({ history }: any) {
  return (
    <Grid inverted textAlign='center' vertical
      className='masthead'>
        <Grid.Column verticalAlign='middle'>
          <Grid.Row>
            <Header as='h1' inverted className='ui'>
              <Image src={clockIcon}></Image>
              One-vents
            </Header>

          </Grid.Row>

          <Grid.Row>
            <Button inverted size='huge' onClick={() => history.push('events')}>
              Get started!
              <Icon disabled name='arrow right' inverted />
            </Button>
          </Grid.Row>


        </Grid.Column>



    </Grid>
  )
}