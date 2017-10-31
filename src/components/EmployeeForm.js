import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

//the only purpose of this form is to show the different fields that the user should see
class EmployeeForm extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        autoFocus
                        label="Name"
                        placeholder="Enter Name"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
            </CardSection>

            <CardSection>
                <Input 
                    label="Phone"    
                    placeholder="555-555-555"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                />
            </CardSection>

            <CardSection>
                <View style={styles.container}>
                    <Text style={styles.pickerLableStyle}>Shift:</Text>
                </View>
                <Picker
                    //note this style of flex 1 is extremely important. If it is not there, then the picker values will not show
                    style={styles.pickerStyle} itemStyle={styles.pickerItemStyle} 
                    selectedValue={this.props.shift} 
                    onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })} 
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
            </CardSection>
        </View>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    pickerLableStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
    pickerStyle: {
        flex: 1,
        marginTop: -10,
        marginBottom: -10,
        marginLeft: -50,
        alignItems: 'center'
    },
    pickerItemStyle: {
        color: '#02378c',
        width: 150,
    },
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
