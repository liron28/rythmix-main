import { SET_RCLICK_MODAL_DATA } from "../reducers/app.reducer";
import { store } from "../store";

export function onToggleRclickModal(modalData = null) {
  store.dispatch({
    type: SET_RCLICK_MODAL_DATA,
    modalData,
  });
}
