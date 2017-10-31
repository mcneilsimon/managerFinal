import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_START } from '../actions/types';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

/*dispatch is what passes the action. So it passes the type and payload in an asynchronous call
we don't call dispatch until the request is complete */
export const loginUser = ({ email, password }) => {
    /*this a function because we use the fat arrow function to return a dispatch of something, 
    unlike previous actions where they do not have a fat arrow function*/
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user)) 
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
            });
        };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    //We import actions at the top through react-native-router-flux, then we call our key title to the necessary scene
    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

