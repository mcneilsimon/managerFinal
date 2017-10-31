/*
The purpose of this component is to form a rectangle that displays the text album. 
*/

//Import libraries for making a component
import React from 'react';

//View creates a border background the size of the text you desire as well as the size of the screen and help position that content.
//We also need View to implement flexbox properties and shadow for a border
import { Text, View } from 'react-native';

//Make a component. As a rule of thumb name your function the name of the file name. We use props to make the header value reusable. This is scene in lecture 27.
const Header = (props) => {
    //destructuring to reference our styles. If your returning styles its best to use the return statement 
    //and curly braces for the function. Here we put all our style properties inside the {}
    const { textStyle, viewStyle } = styles;
    //Here we call the style to implement the design we want on our text
    return (
        //this is called multiline JSX when we implement a View tag and set a style to widgets such as texts.
        //.headerText can be any property name.
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text> 
        </View>
    );
};

//Here we create how we want our component information to appear, i.e color, font
const styles = {
    viewStyle: {
        //This displays a background border content for our text
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', //flex-box property
        alignItems: 'center',
        height: 60, //height of the border box starting from the top
        paddingTop: 15, //padding from the top of the screen,
        marginBottom: 5,

        //the following three elements give a shadow effect at the bottom of the border
        shadowColor: '#000',
        //the width is how far in the opacity shadow will show its effect on the border
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

/*
Make the component available to other parts of the app. We use export statements to do this.
Exporting means allowing us to use this file in other parts of our project/
*/
export { Header };

