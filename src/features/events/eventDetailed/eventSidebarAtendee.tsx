import { Item } from 'semantic-ui-react'

export default function EventSidebarAtendee({ atendee }: any) {
  return (

    <Item>
      <Item.Image size="tiny" src={atendee.photoURL} />
      <Item.Content verticalAlign="middle">
        <Item.Header as="h3">
          <span>{atendee.name}</span>
        </Item.Header>
      </Item.Content>
    </Item>

  )
}