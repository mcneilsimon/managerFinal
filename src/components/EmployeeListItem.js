import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {
    
    onRowPress() {
        /*here we pass props to the employeeCreate form, with a key of employee
        everytime we select an employee name, the selected employees information is passed to the component */
        Actions.employeeEdit({ employee: this.props.employee });
    }
    
    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 10
    }
};

export default EmployeeListItem;
