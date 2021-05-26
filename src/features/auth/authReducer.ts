import { SIGN_IN_USER, SIGN_OUT_USER } from './authActions';

const initialState = {
  currentUser: {
    email: 'one@gmail.com',
    photoUrl: ''
  },
  authenticated: true
};

export default function authReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case SIGN_IN_USER:

      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoUrl:''
        }

       }

    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null
      }

    default:
      return state

  }


}


