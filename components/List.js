import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Settings from './Settings';
import { listStyles } from './liststyles';

const List = ({ route }) => {
  const { workout } = route.params;

  const [workouts, setWorkouts] = useState([
    { icon: 'running', distance: 2, duration: 15 },
    { icon: 'skiing', distance: 4.5, duration: 39 },
    { icon: 'running', distance: 2.5, duration: 15 },
    { icon: 'running', distance: 1.5, duration: 10 },
    { icon: 'swimmer', distance: 2.0, duration: 13 },
  ]);

  const [unit, setUnit] = useState('km');

  useEffect(() => {
    if (workout) {
      setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
    }
  }, [workout]);

  const totalDistances = workouts.reduce((acc, cur) => {
    acc[cur.icon] = (acc[cur.icon] || 0) + parseFloat(cur.distance);
    return acc;
  }, {});

  const updateUnits = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <ScrollView style={listStyles.container}>
      <Text style={listStyles.totalText2}>List of workouts</Text>

      {/* Lisää Settings-komponentti tässä */}
      <Settings updateUnits={updateUnits} />

      <View style={listStyles.totalContainer}>
        <View style={listStyles.totalRow}>
          <FontAwesome5 name="running" style={listStyles.icon} />
          <Text style={listStyles.totalText}>{totalDistances.running || 0} {unit}</Text>
        </View>
        <View style={listStyles.totalRow}>
          <FontAwesome5 name="skiing" style={listStyles.icon} />
          <Text style={listStyles.totalText}>{totalDistances.skiing || 0} {unit}</Text>
        </View>
        <View style={listStyles.totalRow}>
          <FontAwesome5 name="swimmer" style={listStyles.icon} />
          <Text style={listStyles.totalText}>{totalDistances.swimmer || 0} {unit}</Text>
        </View>
      </View>

      {workouts.map((workout, index) => (
        <View key={index} style={listStyles.workoutContainer}>
          <FontAwesome5 name={workout.icon} style={listStyles.icon} />
          <Text style={listStyles.workoutText}>{workout.date}</Text>
          <Text style={listStyles.workoutText}>{`Distance: ${workout.distance} ${unit}`}</Text>
          <Text style={listStyles.workoutText}>{`Duration: ${workout.duration} min`}</Text>
        </View>
      ))}

      {workout && (
        <View style={listStyles.workoutContainer}>
          <FontAwesome5 name={workout.icon} style={listStyles.icon} />
          <Text style={listStyles.workoutText}>{`${workout.date}`}</Text>
          <Text style={listStyles.workoutText}>{`Distance: ${workout.distance} ${unit}`}</Text>
          <Text style={listStyles.workoutText}>{`Duration: ${workout.duration} min`}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default List;
