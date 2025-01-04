import React, { useState } from 'react';
import { View, Text, StyleSheet, Appearance, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lightTheme, darkTheme } from '../theme';
import CharacterCreator from '../menus/character-creator';

const EmptyPage: React.FC = () => {
    const colorScheme = Appearance.getColorScheme() as 'light' | 'dark';
    const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
    const [isDrawerVisible, setDrawerVisible] = useState(false);

    return (
        <View>
            <Text style={theme.message}>Create New Character</Text>
            <TouchableOpacity style={styles.button} onPress={() => setDrawerVisible(true)}>
                <MaterialCommunityIcons 
                    name="plus-circle-outline" 
                    size={24} 
                    color={colorScheme === 'dark' ? '#fff' : '#000'} 
                />
                <Text style={styles.buttonText}>Create Character</Text>
            </TouchableOpacity>

            <CharacterCreator 
                isVisible={isDrawerVisible} 
                onClose={() => setDrawerVisible(false)} 
                colorScheme={colorScheme}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ccc',
        marginTop: 10,
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EmptyPage;
