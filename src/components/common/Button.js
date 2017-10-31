import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        //TouchableOpacity is used to do something when ever a user taps on a button. It trigggers an event. onPress is used to call some method
        //to get our button to perform some action
        <TouchableOpacity onPress={onPress} style={buttonStyle}> 
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {

    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600', //this is the boldness
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1, //this means I want this button to expand as much content it possibly can
        alignSelf: 'stretch', //when we want this element to stretch the limits of this container. 
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };
