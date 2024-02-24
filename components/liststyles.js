// liststyles.js

import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  workoutContainer: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  workoutText: {
    fontSize: 16,
    marginBottom: 5,
  },


  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  },
  totalRow: {
    flex: 1,
    borderWidth: 1,
    padding: 3,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c1d1e0',

  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 3,
   
  },

  totalText2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 20,
    
  },

  icon: {
    fontSize: 20,
    color: 'black',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
   
    
    
    
  },


 
});
