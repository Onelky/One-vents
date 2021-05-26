import { RootStateOrAny, useSelector } from "react-redux"
import ModalTest from "../../../testReducer/modalTest";
import LoginForm from "../../../features/auth/loginForm";
import ModalWrapper from "./modalWrapper";
export default function ModalManager() {
  const modalLookup: { [key: string]: any } = {
    ModalTest,
    LoginForm
  };
  const currentModal = useSelector((state: RootStateOrAny) => state.modals);
  let renderedModal;
  
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps}/>
    
  }
  return (
    <span>
      {renderedModal}
    </span>
  )
  
}
