import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react'

export default function EventListAtendee({atendee}: any) {

  return (
    <List.Item>
      <Image size='mini' circular src={atendee.photoURL}></Image>

    </List.Item>
  )

}