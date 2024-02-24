import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 2, // Borderin leveys
    borderRadius: 15, // Borderin pyöristys
    borderColor: 'black', // Borderin väri
    margin: 40, // Margin kaikkiin suuntiin lisäämään tilaa ympärille
    marginVertical: 50, // Vähennä marginaalia ylhäältä ja alhaalta
    
  }, 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    marginHorizontal: 10,
    paddingHorizontal: 20,
   
  },

  runButton: {
    borderRightWidth: 2, // Viivan leveys
    borderRightColor: 'black', // Viivan väri
    
  },
  skiButton: {
    borderRightWidth: 2, // Viivan leveys
    borderRightColor: 'black', // Viivan väri
  },
  
  numericInputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    
  },
  numericInputLabel: {
    fontSize: 16,
  },
  dateInputContainer: {
   
    backgroundColor: 'lightsteelblue',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 10,
    width: '100%', // Tehdään dateInputContainer niin leveäksi kuin mahdollista
    alignItems: 'center',
  },

  dateInputLabel: {
    fontSize: 16,
  },
  addWorkoutButtonContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 1,
    width: '100%',
  },
  addWorkoutButtonText: {
    fontSize: 18,
  },
});
