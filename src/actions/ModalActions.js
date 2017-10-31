import { DISPLAY_MODAL, CLOSE_MODAL } from '../actions/types';

export const modalViewChange = () => {
    return { type: DISPLAY_MODAL };
};

export const closeModal = () => {
    return { type: CLOSE_MODAL };
};

