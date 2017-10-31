import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />; 
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        autoFocus
                        autoCapitalize="none"
                        label="Email" 
                        placeholder="Enter Email" 
                        onChangeText={this.onEmailChange.bind(this)}
                        /*value gives the value of input everytime the state is re-rendered.
                        we gets this value by using mapStateToPros by bring the email into a property in our components
                        */
                        value={this.props.email}
                        keyboardType='email-address'
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry 
                        label="Password"
                        placeholder="Enter Password" 
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.props.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToPros = ({ auth }) => {
    const { email, password, error, loading, user } = auth;
    return { email, password, error, loading, user };
};

export default connect(mapStateToPros, { emailChanged, passwordChanged, loginUser })(LoginForm);
