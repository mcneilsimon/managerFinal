import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    
    componentWillMount() {
        this.props.employeesFetch();
        //sending the old set of props with this.props
        this.createDataSource(this.props);
    }

    /* new lifecycle method, used when we are getting asynchronous data. Were as componentWillMount 
    only has access to the previous props that were displayed. */ 
    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component will be rendered with
        //this.props is still the old set of props. nextProps is sending the new set of props

        
        this.createDataSource(nextProps);
    }

    /*createData Source is a helpher method, use to create your data source with the above lifecycle methods. 
    This is done because both lifecycle methods are used on seperate occasions, therefore both will call 
    createDataSource when necessary but both method will never call createDataSource at the same time*/
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    //console.log(state);
    
    //val is the model, its hold all the properties including name, shift, and phone
    //uid is the user id.
    const employees = _.map(state.employees, (val, uid) => {
        //here we are returning a new object, pushing in all the values from the use model, and then through the id on top
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
