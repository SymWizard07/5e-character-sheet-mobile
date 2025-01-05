import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DataPicker from '../page_components/data-picker';

interface CharacterCreatorProps {
    isVisible: boolean;
    onClose: () => void;
    colorScheme: 'light' | 'dark';
}

const CharacterCreator: React.FC<CharacterCreatorProps> = ({ isVisible, onClose, colorScheme }) => {
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedSubrace, setSelectedSubrace] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedBackground, setSelectedBackground] = useState('');

    const [openRace, setOpenRace] = useState(false);
    const [openSubrace, setOpenSubrace] = useState(false);
    const [openClass, setOpenClass] = useState(false);
    const [openBackground, setOpenBackground] = useState(false);

    const theme = colorScheme === 'dark' ? darkStyles : lightStyles;
    const pickerTheme = colorScheme === 'dark' ? 'DARK' : 'LIGHT';

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.drawerContainer}>
                <View style={[styles.drawerContent, colorScheme === 'dark' ? darkStyles.drawerContent : lightStyles.drawerContent]}>
                    <Text style={[styles.drawerTitle, colorScheme === 'dark' ? darkStyles.drawerTitle : lightStyles.drawerTitle]}>New Character</Text>

                    <View style={styles.row}>
                        <Text style={[styles.label, colorScheme === 'dark' ? darkStyles.label : lightStyles.label]}>Race</Text>
                        <DataPicker
                            fileKey='races'
                            jsonPath='race'
                            propertyName='name'
                            sourcePropName='source'
                            colorScheme={colorScheme}
                            zIndex={4000}
                            zIndexInverse={1000}
                            placeholder='Select Race'
                            value={selectedRace}
                            setValue={setSelectedRace}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.label, colorScheme === 'dark' ? darkStyles.label : lightStyles.label]}>Subrace</Text>
                        <DataPicker
                            fileKey='races'
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.label, colorScheme === 'dark' ? darkStyles.label : lightStyles.label]}>Class</Text>
                        <DropDownPicker
                            open={openClass}
                            value={selectedClass}
                            items={[{ label: 'Fighter', value: 'fighter' }, { label: 'Wizard', value: 'wizard' }, { label: 'Rogue', value: 'rogue' }]}
                            setOpen={setOpenClass}
                            setValue={setSelectedClass}
                            placeholder="Select Class"
                            zIndex={2000}
                            zIndexInverse={3000}
                            theme={pickerTheme}
                            style={theme.dropDownPicker}
                            dropDownContainerStyle={theme.dropDownContainer}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={[styles.label, colorScheme === 'dark' ? darkStyles.label : lightStyles.label]}>Background</Text>
                        <DropDownPicker
                            open={openBackground}
                            value={selectedBackground}
                            items={[{ label: 'Noble', value: 'noble' }, { label: 'Soldier', value: 'soldier' }, { label: 'Criminal', value: 'criminal' }]}
                            setOpen={setOpenBackground}
                            setValue={setSelectedBackground}
                            placeholder="Select Background"
                            zIndex={1000}
                            zIndexInverse={4000}
                            theme={pickerTheme}
                            style={theme.dropDownPicker}
                            dropDownContainerStyle={theme.dropDownContainer}
                        />
                    </View>

                    <TouchableOpacity onPress={onClose} style={[styles.closeButton, colorScheme === 'dark' ? darkStyles.closeButton : lightStyles.closeButton]}>
                        <Text style={[styles.closeButtonText, colorScheme === 'dark' ? darkStyles.closeButtonText : lightStyles.closeButtonText]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    drawerContent: {
        height: '80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'stretch',
    },
    drawerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    row: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    closeButton: {
        position: 'absolute',
        bottom: 40,
        padding: 10,
        borderRadius: 8,
        alignSelf: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const lightStyles = StyleSheet.create({
    drawerContent: {
        backgroundColor: '#fff',
    },
    drawerTitle: {
        color: '#000',
    },
    label: {
        color: '#000',
    },
    closeButton: {
        backgroundColor: '#ccc',
    },
    closeButtonText: {
        color: '#000',
    },
    dropDownContainer: {
        borderColor: '#444',
        backgroundColor: '#fff',
    },
    dropDownPicker: {
        borderColor: '#444',
        backgroundColor: '#f9f9f9',
    },
});

const darkStyles = StyleSheet.create({
    drawerContent: {
        backgroundColor: '#292929',
    },
    drawerTitle: {
        color: '#fff',
    },
    label: {
        color: '#fff',
    },
    closeButton: {
        backgroundColor: '#333',
    },
    closeButtonText: {
        color: '#fff',
    },
    dropDownContainer: {
        borderColor: '#666',
        backgroundColor: '#333',
    },
    dropDownPicker: {
        borderColor: '#888',
        backgroundColor: '#444',
    },
});

export default CharacterCreator;
