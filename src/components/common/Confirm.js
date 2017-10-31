import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, cardSectionStyle, textStyle } = styles;
    return (
        <Modal animationType="slide" onRequestClose={() => {}} transparent visible={visible} >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40 //how much space is in between the text
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)', //the last value sets the opacity level
        position: 'relative',
        flex: 1,
        justifyContent: 'center' //makes everything centered on the screen
    }
};

export { Confirm };
