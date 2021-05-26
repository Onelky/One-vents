export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export function signIn(payload: any) {
  return {
    type: SIGN_IN_USER,
    payload
  }

}

export function signOut() {
  return {
    type: SIGN_OUT_USER
  }
}