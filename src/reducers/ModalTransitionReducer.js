import { DISPLAY_MODAL, CLOSE_MODAL } from '../actions/types';

const INITIAL_STATE = { showModal: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case DISPLAY_MODAL:
            return { ...state, showModal: true };

        case CLOSE_MODAL:
            return { ...INITIAL_STATE };

        default:
            return state;
    }
};
