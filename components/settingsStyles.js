// settingsStyles.js
import { StyleSheet } from 'react-native';

export const settingsStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10, // Lisätty pyöristetty kulma
    borderWidth: 2, // Lisätty reunan leveys
    borderColor: 'gray', // Voit muuttaa reunan värin tarvittaessa
    margin: 7, 
    width: 250,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  unitText: {
    fontSize: 16,
    marginBottom: 1,
  },
  selectedUnit: {
    fontWeight: 'bold',
    color: 'blue',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
