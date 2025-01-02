import React from 'react';
import { View, TextInput } from 'react-native';
import { lightTheme, darkTheme } from '../theme';
import { Appearance } from 'react-native';

const StatusPage: React.FC = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={theme.container}>
      <TextInput
        style={[theme.input, theme.inputText]}
        placeholder="Player Name"
        placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#888'}
      />
      <TextInput
        style={[theme.input, theme.inputText]}
        placeholder="Class & Level"
        placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#888'}
      />
    </View>
  );
};

export default StatusPage;
