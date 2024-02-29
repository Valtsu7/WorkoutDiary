import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Settings from './Settings';
import { styles } from './styles';

const Form = ({ navigation }) => {
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSport, setSelectedSport] = useState('');
  const [unit, setUnit] = useState('km');
  const [useEffectExecuted, setUseEffectExecuted] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const updateUnits = (newUnit) => {
    setUnit(newUnit);
    setUseEffectExecuted(false);
  };

  useEffect(() => {
    console.log('useEffect triggered with unit:', unit);
    const convertedDistance = unit === 'mi' ? parseFloat(distance) / 1.60934 : parseFloat(distance) * 1.60934;
    setDistance(isNaN(convertedDistance) ? '' : convertedDistance.toFixed(2));
  }, [unit]);

  const convertDistance = (distance, fromUnit, toUnit) => {
    // Muunna etäisyys eri yksiköiden välillä
    if (fromUnit === toUnit) {
      return distance;
    }
    return fromUnit === 'km' ? distance / 1.60934 : distance * 1.60934;
  };

  const handleAddWorkout = () => {
    console.log('handleAddWorkout called');
    if (parseFloat(distance) < 0 || parseFloat(duration) < 0) {
      alert('Distance and duration cannot be negative.');
      return;
    }

    const convertedDistance = unit === 'mi' ? parseFloat(distance) / 1.60934 : parseFloat(distance) * 1.60934;

    const newWorkout = {
      date: selectedDate.toLocaleDateString('en-GB'),
      distance: distance,
      duration,
      sportType: selectedSport,
      icon: getSportIcon(selectedSport),
      unit,
    };

    navigation.navigate('List', {
      workout: newWorkout,
    });
  };

  const getSportIcon = (sportType) => {
    switch (sportType) {
      case 'run':
        return 'running';
      case 'ski':
        return 'skiing';
      case 'swim':
        return 'swimmer';
      default:
        return 'question';
    }
  };

  const handleSportTypePress = (type) => {
    setSportType(type);
    setSelectedSport(type);
  };

  return (
    <View style={styles.container}>
      <Text>Add Workout</Text>
      <View style={styles.sportButton}>
        <TouchableOpacity onPress={() => handleSportTypePress('run')}>
          <FontAwesome5 name="running" size={30} color={selectedSport === 'run' ? 'red' : 'blue'} />
          <Text style={[styles.buttonText, styles.runButton]}>Run</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSportTypePress('ski')}>
          <FontAwesome5 name="skiing" size={30} color={selectedSport === 'ski' ? 'red' : 'blue'} />
          <Text style={[styles.buttonText, styles.skiButton]}>Ski</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSportTypePress('swim')}>
          <FontAwesome5 name="swimmer" size={30} color={selectedSport === 'swim' ? 'red' : 'blue'} />
          <Text style={[styles.buttonText, styles.swimButton]}>Swim</Text>
        </TouchableOpacity>
      </View>

      <Settings updateUnits={updateUnits} distance={distance} setDistance={setDistance} />

      <TextInput
        style={styles.numericInputContainer}
        placeholder={`Distance (${unit})`}
        keyboardType="numeric"
        value={distance}
        onChangeText={(text) => setDistance(text)}
      />
      <TextInput
        style={styles.numericInputContainer}
        placeholder="Duration (min)"
        keyboardType="numeric"
        value={duration}
        onChangeText={(text) => setDuration(text)}
      />
      <TouchableOpacity style={styles.dateInputContainer} onPress={showDatePicker}>
        <Text>{selectedDate.toLocaleDateString('en-GB')}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={selectedDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="en"
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleAddWorkout}>
        <Text>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
