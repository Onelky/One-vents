import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../app/common/modals/modalActions";
import LoginForm from "../features/auth/loginForm";
import ModalTest from "./modalTest";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const data = useSelector((state: RootStateOrAny) => state.test.data);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hii</h1>
      <h3>Data is: {data} </h3>
      <Button
        content='Increment +'
        color='green'
        onClick={() => dispatch(increment(3))}
      />

      <Button
        content='Decrement -'
        color='red'
        onClick={() => dispatch(decrement(10))}
      />

      <Button
        content='Open modal'
        color='teal'
        onClick={() => dispatch(openModal({ modalType: 'ModalTest', modalProps: { data } }))} />
      
      <LoginForm></LoginForm>
    </>
  )
}
