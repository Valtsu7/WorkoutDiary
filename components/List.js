import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Settings from './Settings';
import { listStyles } from './styles/liststyles';

const List = ({ route }) => {
  const { workout } = route.params;

  const [workouts, setWorkouts] = useState([
    { icon: 'running', date: "01/04/2024", distance: 2, duration: 15, unit: 'km' },
    { icon: 'skiing', date: "13/01/2024", distance: 4.5, duration: 39, unit: 'km' },
    { icon: 'running', date: "22/01/2024", distance: 2.5, duration: 15, unit: 'km' },
    { icon: 'running', date: "02/02/2024", distance: 1.5, duration: 10, unit: 'km' },
    { icon: 'swimmer', date: "22/02/2024", distance: 2.0, duration: 13, unit: 'km' },
  ]);

  const [unit, setUnit] = useState('km');

  const [totalDistances, setTotalDistances] = useState({
    running: 0,
    skiing: 0,
    swimmer: 0,
  });

  useEffect(() => {
    
    if (workout) {
      setUnit(workout.unit);
      setWorkouts((prevWorkouts) => [...prevWorkouts, { ...workout }]);
    }
  }, [workout]);

  useEffect(() => {
    const updatedTotalDistances = workouts.reduce((acc, cur) => {
      acc[cur.icon] = (acc[cur.icon] || 0) + parseFloat(cur.distance);
      return acc;
    }, {});
    setTotalDistances(updatedTotalDistances);
  }, [workouts]);

  useEffect(() => {
   
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((workout) => ({
        ...workout,
        distance: parseFloat(workout.distance).toFixed(2),
        unit: unit,
      }))
    );
  }, [unit]);

  const updateUnits = (newUnit) => {
    
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((workout) => ({
        ...workout,
        unit: newUnit,
      }))
    );
    setUnit(newUnit);
  };

  return (
    <ScrollView style={listStyles.container}>
      <Text style={listStyles.totalText2}>List of workouts</Text>
      <Text style={listStyles.totalText3}>Total distances</Text>
      <View style={listStyles.totalContainer}>
        <View style={listStyles.totalRow}>
          <FontAwesome5 name="running" style={listStyles.icon} />
          <Text style={listStyles.totalText}>
            {totalDistances.running.toFixed(2) || 0} {unit}
          </Text>
        </View>
        <View style={listStyles.totalRow}>
          <FontAwesome5 name="skiing" style={listStyles.icon} />
          <Text style={listStyles.totalText}>
            {totalDistances.skiing.toFixed(2) || 0} {unit}
          </Text>
        </View>
        <View style={listStyles.totalRow}>
          <FontAwesome5 name="swimmer" style={listStyles.icon} />
          <Text style={listStyles.totalText}>
            {totalDistances.swimmer.toFixed(2) || 0} {unit}
          </Text>
        </View>
      </View>

      {workouts.map((workout, index) => (
        <View key={index} style={listStyles.workoutContainer}>
          <FontAwesome5 name={workout.icon} style={listStyles.icon2} />
          <Text style={listStyles.workoutText}>{`${workout.date}`}</Text>
          <Text style={listStyles.workoutText}>{`Distance: ${workout.distance} ${workout.unit}`}</Text>
          <Text style={listStyles.workoutText}>{`Duration: ${workout.duration} min`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default List;
