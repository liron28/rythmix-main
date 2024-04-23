export const SET_RCLICK_MODAL_DATA = "SET_RCLICK_MODAL_DATA";

const initialState = {
  rclickModalData: null,
};

export function appReducer(state = initialState, cmd = {}) {
  switch (cmd.type) {
    case SET_RCLICK_MODAL_DATA:
      return {
        ...state,
        rclickModalData: cmd.modalData,
      };

    default:
      return state;
  }
}
