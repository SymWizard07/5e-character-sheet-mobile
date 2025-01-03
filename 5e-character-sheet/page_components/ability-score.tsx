import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface AbilityScoreProps {
  name: string;
  score: string;
  modifier: string;
  save: string;
  colorScheme: 'light' | 'dark';
  borders?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
}

const AbilityScore: React.FC<AbilityScoreProps> = ({ name, score, modifier, save, colorScheme, borders = {} }) => {
  const textColor = colorScheme === 'dark' ? '#fff' : '#000';
  const borderColor = colorScheme === 'dark' ? '#fff' : '#000';

  const borderStyles = {
    borderTopWidth: borders.top ? 1 : 0,
    borderBottomWidth: borders.bottom ? 1 : 0,
    borderLeftWidth: borders.left ? 1 : 0,
    borderRightWidth: borders.right ? 1 : 0,
    borderColor,
  };

  return (
    <View style={[styles.abilityRow, borderStyles]}> 
      <Text style={[styles.abilityName, { color: textColor }]}>{name}</Text>
      <View style={styles.abilityFields}> 
        <View style={styles.inputGroup}> 
          <Text style={[styles.label, { color: textColor }]}>Score</Text>
          <TextInput
            style={[styles.input, { borderColor, color: textColor }]}
            value={score}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputGroup}> 
          <Text style={[styles.label, { color: textColor }]}>Modifier</Text>
          <TextInput
            style={[styles.input, { borderColor, color: textColor }]}
            value={modifier}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputGroup}> 
          <Text style={[styles.label, { color: textColor }]}>Save</Text>
          <TextInput
            style={[styles.input, { borderColor, color: textColor }]}
            value={save}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  abilityRow: {
    margin: 2,
    paddingVertical: 0,
  },
  abilityName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 2,
  },
  abilityFields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    marginBottom: 4,
  },
  input: {
    width: 60,
    height: 20,
    marginBottom: 4,
    borderWidth: 0,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});

export default AbilityScore;
