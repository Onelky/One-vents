export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(payload: any) {
  return {
    type: OPEN_MODAL,
    payload: payload
  }

}

export function closeModal() {
  return {
    type: CLOSE_MODAL
    // it doesn't need any payload cause it's not gonna show anything 
  }
}