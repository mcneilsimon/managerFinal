import React, { Component } from 'react';
// import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //remember redux-thunk is a middleware so we have to call this helper function from redux below
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  //component willl mount is used to make sure that firebase is booted up right away
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyCVNDet8NVHAMqRUXlEjTTL5V50WUL2j28',
        authDomain: 'manager-988b6.firebaseapp.com',
        databaseURL: 'https://manager-988b6.firebaseio.com',
        projectId: 'manager-988b6',
        storageBucket: 'manager-988b6.appspot.com',
        messagingSenderId: '497850996224'
    };

    firebase.initializeApp(config);
  } 

  render() {
    //applyMidleware is a store enhancer because it is adding functionality to the store
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      /*remember to create the store in the provider tag to give an instance of a redux store.
        The provider tag is what connects all those different connects tag that we scatter about our application. 
        And the provider tag makes sure that all those connect tag can get access to the store, grab our redux state and then
        pass it to individual components
      */
      //remmeber to provide at least on default reducer in createStore, if not your app will crash in the emulator
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

