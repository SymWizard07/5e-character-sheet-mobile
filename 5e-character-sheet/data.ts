import * as FileSystem from 'expo-file-system';

const DefaultData = {
    appData: {
        openCharacterFn: '',
        openTabIndex: 2,
    },
    characterData: null as any,
}

export const Data = {
    appData: DefaultData.appData,
    characterData: DefaultData.characterData,
}

const saveData = async (data: Object, fn: string) => {
    const fileUri = FileSystem.documentDirectory + fn;
    try {
        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(data));
    } catch (error) {
        return console.error('Error saving data:', error);
    }
};

export const saveCharacterData = async () => {
    // Create file name for character with _ replacing spaces
    if (!Data.characterData) {
        console.error('No character data to save');
        return;
    }
    const characterFileName = Data.characterData.name.replace(/ /g, '_') + '.json';
    await saveData(Data.characterData, characterFileName);
}

export const saveAppData = async () => {
    await saveData(Data.appData, 'appdata.json');
}

export const loadAppData = async () => {
    const fileUri = FileSystem.documentDirectory + 'appdata.json';
    try {
        const fileExists = await FileSystem.getInfoAsync(fileUri);
        if (fileExists.exists) {
            const data = await FileSystem.readAsStringAsync(fileUri);
            console.log('App data loaded');
            Data.appData = JSON.parse(data);
        }
        else {
            console.log('No app data found. Setting default data');
            return;
        }
    } catch (error) {
        console.error('Error loading app data:', error);
        return;
    }
}

export const loadCharacterData = async (characterFn: string) => {
    const fileUri = FileSystem.documentDirectory + characterFn;
    try {
        const fileExists = await FileSystem.getInfoAsync(fileUri);
        if (fileExists.exists) {
            const data = await FileSystem.readAsStringAsync(fileUri);
            console.log('Character data loaded');
            Data.characterData = JSON.parse(data);
        }
        else {
            console.log('No character data found');
            return;
        }
    } catch (error) {
        console.error('Error loading character data:', error);
        return;
    }
}