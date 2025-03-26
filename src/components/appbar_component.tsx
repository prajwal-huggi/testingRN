import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10, 
        backgroundColor: '#FFFFFF', // White background
        borderBottomWidth: 1, // Subtle border
        borderBottomColor: '#E0E0E0',
    },
    icon: {
        padding: 10, // Increased padding
    },
});

interface Props {
    openDrawer: () => void;
    onProfilePress: () => void;
}

const AppBar: React.FC<Props> = ({ openDrawer, onProfilePress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={openDrawer} style={styles.icon}>
                <FontAwesomeIcon icon={'100'} size={24} color="#333333" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onProfilePress} style={styles.icon}>
                <FontAwesomeIcon icon={'42-group'} size={24} color="#333333" />
            </TouchableOpacity>
        </View>
    );
};

export default AppBar;