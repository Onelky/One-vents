import { useDispatch } from "react-redux";
import { Header, Image, Modal } from "semantic-ui-react";
import { closeModal } from "./modalActions";
import calendar from '../../../assets/calendar.png'

export default function ModalWrapper({ children, size, header }: any) {
  const dispatch = useDispatch();

  return (
    <Modal open={true} size={size} onClose={() => dispatch(closeModal())}>

      <Header as='h2' color='teal' textAlign='center'>
        <Image src={calendar} /> {header}
      </Header>
      
      <Modal.Content >
        {children} 
      </Modal.Content>

    </Modal>
  )
  

}