import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { lightTheme, darkTheme } from '../theme';
import { Appearance } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AbilityScore from '../page_components/ability-score';

const StatusPage: React.FC = () => {
    const colorScheme = Appearance.getColorScheme() as 'light' | 'dark';
    const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

    return (
        <View style={[styles.container, { backgroundColor: 'transparent' }]}>
            <View style={styles.row}>
                <TextInput
                    style={[theme.input, theme.inputText, styles.textInput, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
                    placeholder="Player Name"
                    placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#888'}
                />
                <TextInput
                    style={[theme.input, theme.inputText, styles.textInput, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
                    placeholder="Class & Level"
                    placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#888'}
                />
            </View>
            <View style={[styles.groupContainer, { borderColor: colorScheme === 'dark' ? '#444' : '#ccc' }]}>
                <View style={styles.row}>
                    <View style={styles.inputGroup}>
                        <Text style={[styles.label, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Initiative</Text>
                        <TextInput
                            style={[styles.inputBase, styles.initiativeInput, { borderColor: colorScheme === 'dark' ? 'limegreen' : 'limegreen', color: colorScheme === 'dark' ? '#fff' : '#000' }]}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={[styles.label, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>HP</Text>
                        <View style={styles.hpContainer}>
                            <MaterialCommunityIcons
                                name="heart-outline"
                                size={100}
                                color={colorScheme === 'dark' ? '#888' : '#ccc'}
                                style={styles.icon}
                            />
                            <TextInput
                                style={[styles.hpInput, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={[styles.label, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Speed</Text>
                        <TextInput
                            style={[styles.inputBase, styles.speedInput, { borderColor: colorScheme === 'dark' ? 'blue' : 'blue', color: colorScheme === 'dark' ? '#fff' : '#000' }]}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inputGroup}>
                        <Text style={[styles.label, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Hit Dice</Text>
                        <TextInput
                            style={[styles.inputBase, styles.mutedInput, { borderColor: colorScheme === 'dark' ? '#666' : '#999', color: colorScheme === 'dark' ? '#fff' : '#000' }]}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={[styles.label, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Armor Class</Text>
                        <View style={styles.hpContainer}>
                            <MaterialCommunityIcons
                                name="shield-outline"
                                size={100}
                                color={colorScheme === 'dark' ? '#888' : '#ccc'}
                                style={styles.icon}
                            />
                            <TextInput
                                style={[styles.hpInput, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={[styles.label, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Proficiency</Text>
                        <TextInput
                            style={[styles.inputBase, styles.mutedInput, { borderColor: colorScheme === 'dark' ? '#666' : '#999', color: colorScheme === 'dark' ? '#fff' : '#000' }]}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.groupContainer, { borderColor: colorScheme === 'dark' ? '#444' : '#ccc' }]}>
                <View style={styles.abilityRow}>
                    <AbilityScore name="Strength" score="15" modifier="+2" save="+2" colorScheme={colorScheme} borders={{bottom: true, right: true}}/>
                    <AbilityScore name="Dexterity" score="15" modifier="+2" save="+2" colorScheme={colorScheme} borders={{bottom: true, left: true}}/>
                </View>
                <View style={styles.abilityRow}>
                    <AbilityScore name="Constitution" score="15" modifier="+2" save="+2" colorScheme={colorScheme} borders={{top: true, bottom: true, right: true}}/>
                    <AbilityScore name="Intelligence" score="15" modifier="+2" save="+2" colorScheme={colorScheme} borders={{top: true, bottom: true, left: true}}/>
                </View>
                <View style={styles.abilityRow}>
                    <AbilityScore name="Wisdom" score="15" modifier="+2" save="+2" colorScheme={colorScheme} borders={{top: true, right: true}}/>
                    <AbilityScore name="Charisma" score="15" modifier="+2" save="+2" colorScheme={colorScheme} borders={{top: true, left: true}}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    groupContainer: {
        marginTop: 8,
        padding: 0,
        paddingTop: 0,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: 'transparent',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    abilityRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    textInput: {
        flex: 1,
        marginHorizontal: 8,
    },
    inputBase: {
        width: 80,
        height: 80,
        marginHorizontal: 8,
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'Helvetica',
    },
    initiativeInput: {},
    speedInput: {},
    mutedInput: {},
    hpContainer: {
        position: 'relative',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
    },
    hpInput: {
        width: 100,
        height: 50,
        textAlign: 'center',
        zIndex: 2,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'Helvetica',
        borderWidth: 0,
    },
    inputGroup: {
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        marginBottom: 4,
    },
});

export default StatusPage;
