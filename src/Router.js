import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

/* react-native-router-flux sets the backgound to grey by default
to fix this create a const variable and the cardStyle and implement this in the 
first scene tag below the router
*/
const sceneConfig = {
    cardStyle: {
          backgroundColor: 'white'
    }
};

const RouterComponent = () => {
    const createRightButton = function () {   
        return (
            <View style={{ marginRight: 12 }}>
                <TouchableOpacity onPress={() => Actions.employeeCreate()}>
                    <Icon name="add-user" size={25} color="#0D5CFC" />
                </TouchableOpacity>
            </View>
        );
    };

    const createLeftButton = function () { 
        return (
            <View style={{ marginLeft: 13 }}>
                <TouchableOpacity 
                    onPress={() => Alert.alert(
                    'Log Out Of Manager?',
                    null,
                    [ 
                        { text: 'Cancel', onPress: () => console.log('canceled') },
                        { text: 'Yes', 
                            onPress: () => firebase.auth().signOut()
                            .then(() => { 
                                Actions.pop();
                            })
                        }
                    ]
                )}>
                    <Icon name="log-out" size={27.5} color="#0D5CFC" />
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <Router>
            <Scene key="root" {...sceneConfig} navigationBarStyle={{ backgroundColor: 'white' }} hideNavBar>

                {/* don't forget the initial prop when it is necessary be default order of declarations comes first*/}
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" />
                </Scene>

                <Scene key="main">
                    <Scene 
                        initial 
                        key="employeeList" 
                        renderRightButton={createRightButton}
                        renderLeftButton={createLeftButton}
                        component={EmployeeList}
                        title="Employees" 
                        rightTitle="Add" 
                        onRight={() => Actions.employeeCreate()} 
                    />
                    <Scene 
                        key="employeeCreate" 
                        component={EmployeeCreate} 
                        title="Create Employee" 
                    />
                    <Scene 
                        key="employeeEdit" 
                        component={EmployeeEdit} 
                        title="Edit Employee" 
                    />
                </Scene>
            </Scene>
        </Router> 
    );
};

export default RouterComponent;

//borderBottomColor: 'transparent' this gets rid of the borde bottom width, just set the color to the background color
