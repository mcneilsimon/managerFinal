//Creates the Card basic frame layout

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        //props.children from our component that we added in AlbumDetial (Card) automatically shows what we passed to the Card component
        //We are passing one component to another in shorter words
        <View style={styles.containerStyle}>{props.children}</View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1, //border thickness
        borderRadius: 2, //any corner to the radius, round them of nicely
        borderColor: '#ddd',
        borderBottomWidth: 0, //hiding the border at thebottom
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, //you can go anywhere from 0-1 with the opacity
        shadowRadius: 2, //at the corner of the shadow it will round them off nicely
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10, //spacing between each card
    }
};

export { Card };
