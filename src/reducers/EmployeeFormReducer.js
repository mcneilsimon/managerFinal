import { EMPLOYEE_UPDATE, CLEAR_EMPLOYEE_FORM } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: 'Thursday' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //actions.paylaod will look something like { prop: 'name', value: 'jane' }

            /*the square braces here are called key interpollation. This is a case used from JSX. 
            It allows us to declare are key at runtime.*/
            return { ...state, [action.payload.prop]: action.payload.value };

        /*resetting the state how it first exists to get rid of all the data displayed in 
          the create employee form when wanting to create a new employee*/
        case CLEAR_EMPLOYEE_FORM:
            return { ...INITIAL_STATE };
            
        default:
            return state;
    }
};
