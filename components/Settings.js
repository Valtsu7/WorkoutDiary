// Settings.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { settingsStyles } from './styles/settingsStyles';

const Settings = ({ updateUnits, distance, setDistance }) => {
  const [selectedUnit, setSelectedUnit] = useState('km');

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
    updateUnits(unit);
  };

  return (
    <View style={settingsStyles.container}>
      <Text style={settingsStyles.title}>Select units</Text>

      <TouchableOpacity onPress={() => handleUnitChange('km')}>
        <View style={settingsStyles.radioButtonContainer}>
          <RadioButton.Android
            color="#6200EE"
            value="km"
            status={selectedUnit === 'km' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('km')}
          />
          <Text style={settingsStyles.unitText}>Kilometers (km)</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleUnitChange('mi')}>
        <View style={settingsStyles.radioButtonContainer}>
          <RadioButton.Android
            color="#6200EE"
            value="mi"
            status={selectedUnit === 'mi' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('mi')}
          />
          <Text style={settingsStyles.unitText}>Miles (mi)</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
