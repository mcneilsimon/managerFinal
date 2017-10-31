import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_START } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            /*the ... is your existing state and then the new state values that are set to payload are what overrides those existing values
            We are creating a new object when doing this, making sure that redux knows that we changed something*/
            return { ...state, email: action.payload };
        
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case LOGIN_USER_FAIL:   
            return { ...state, error: 'Authentication Failed', password: '', loading: false };

        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' };
        default: 
            return state;
    }
};
