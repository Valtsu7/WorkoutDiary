// settingsStyles.js
import { StyleSheet } from 'react-native';

export const settingsStyles = StyleSheet.create({
  container: {
    padding: 10,
   
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
