import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEES_FETCH_SUCCESS, CLEAR_EMPLOYEE_FORM, CLOSE_MODAL } from '../actions/types';

//this is an action creator that can update any prop inside our form.
//the prop value can be name, phone, or shift, and the value is w/e the input of the user typed in.
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

//launched when the create button is selected
export const createEmployee = ({ name, phone, shift }) => {
    //this gets the current user that is signed in our application
    const { currentUser } = firebase.auth();

    //the only reason we wrap this firebase command in a return statement, is to get pass the error that gets displayed cus of redux thunk
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift })
        .then(() => {
            dispatch({ type: CLEAR_EMPLOYEE_FORM });
            Actions.pop();
        }); 
    };
};

//actions creator to get the information to display in the list view
export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ 
                type: EMPLOYEES_FETCH_SUCCESS, 
                payload: snapshot.val() 
            });
        });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).set({ name, phone, shift })
        .then(() => {
            dispatch({ type: CLEAR_EMPLOYEE_FORM });
            Actions.pop();
        });
    };
};

export const clearEmployeeForm = () => {
    return (dispatch) => dispatch({
        type: CLEAR_EMPLOYEE_FORM
    });
};

export const employeeDelete = ({ uid }) => {
    /* we don't call dispatch here because we know the employeeFetch method will be called automatically
        since we are updating our employee information from firebase */
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).remove()
        .then(() => {
            dispatch({ type: CLOSE_MODAL });
            Actions.pop();
        });
    };
};
