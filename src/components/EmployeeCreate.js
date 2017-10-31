import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearEmployeeForm, createEmployee } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    
    componentWillMount() {
        this.props.clearEmployeeForm();
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.createEmployee({ name, phone, shift });
    }

    render() {
        //console.log(this.props.employee);
        return (
            <Card>
                {/* here we are passing all the different props received by EmployeeCreate and sending to EmployeeForm */}
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create Employee </Button>
                </CardSection>
            </Card>

        );
    }
}


//remember employeeForm comes from our reducer key value in the index.js file in the reducer folder
const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { clearEmployeeForm, createEmployee })(EmployeeCreate);
