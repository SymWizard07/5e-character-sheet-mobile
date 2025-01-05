import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dispatch, SetStateAction } from 'react';
import { fileMap } from '../assets/5e-data/index'; // Adjust the path as necessary

interface DataPickerProps {
    fileKey: string; // Key to identify the file in the fileMap
    jsonPath: string;
    propertyName: string;
    sourcePropName?: string; // Optional prop for the source information
    colorScheme: 'light' | 'dark';
    zIndex: number;
    zIndexInverse: number;
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const DataPicker: React.FC<DataPickerProps> = ({
    fileKey,
    jsonPath,
    propertyName,
    sourcePropName,
    colorScheme,
    zIndex,
    zIndexInverse,
    placeholder,
    value,
    setValue,
}) => {
    const [items, setItems] = useState<{ label: string; value: string }[]>([]);
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const themeStyles = colorScheme === 'dark' ? darkStyles : lightStyles;

    useEffect(() => {
        const loadData = () => {
            try {
                const jsonData = fileMap[fileKey]; // Use the static file map

                const data = jsonPath.split('.').reduce((acc, key) => acc[key], jsonData);

                if (Array.isArray(data)) {
                    const formattedItems = data.map((item: any, index: number) => {
                        const label = item[propertyName] || String(item);
                        const source = sourcePropName ? item[sourcePropName] : undefined;
                        const fullLabel = source ? `${label} (${source})` : label;

                        return {
                            label: fullLabel,
                            value: String(index), // Use the index as the value
                        };
                    });
                    setItems(formattedItems);
                } else {
                    console.error('Path did not resolve to an array');
                }
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        loadData();
    }, [fileKey, jsonPath, propertyName, sourcePropName]);

    const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={filteredItems}
            setOpen={setOpen}
            setValue={setValue}
            placeholder={placeholder}
            zIndex={zIndex}
            zIndexInverse={zIndexInverse}
            theme={colorScheme === 'dark' ? 'DARK' : 'LIGHT'}
            style={[themeStyles.dropDownPicker, { height: 60 }]} // Increase height
            dropDownContainerStyle={[themeStyles.dropDownContainer, { maxHeight: 300 }]} // Increase visible items
            searchable={true}
            searchPlaceholder="Search..."
            onChangeSearchText={setSearchValue}
        />
    );
};

const lightStyles = StyleSheet.create({
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
    dropDownContainer: {
        borderColor: '#666',
        backgroundColor: '#333',
    },
    dropDownPicker: {
        borderColor: '#888',
        backgroundColor: '#444',
    },
});

export default DataPicker;
