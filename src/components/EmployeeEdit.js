import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete, modalViewChange, closeModal } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

//we pass in the user info in EmployeeEdit by calling the action creator employeeUpdate
class EmployeeEdit extends Component {

    componentWillMount() {
        //are key value is referred to as prop in here
        //we update are reducer by iterating through every object and passing it to the action employeeUpdate
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.props.closeModal();
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.props.modalViewChange()}>Fire Employee</Button>
                </CardSection>

                <Confirm 
                    visible={this.props.showModal} 
                    onAccept={this.onAccept.bind(this)} 
                    onDecline={this.onDecline.bind(this)}
                >
                    Are You Sure You Want To Delete This?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { showModal } = state.modalReducer;
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift, showModal };
};

export default connect(mapStateToProps, { 
    employeeUpdate, 
    employeeSave, 
    employeeDelete, 
    modalViewChange, 
    closeModal }
)(EmployeeEdit);
