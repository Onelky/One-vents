import React from 'react'
import ModalWrapper from '../app/common/modals/modalWrapper'

export default function ModalTest({data}: any) {
  return (
    <ModalWrapper size='mini' header = 'Hiii'>
      <div>The data is: {data}</div>

    </ModalWrapper>
  )
}
