// liststyles.js

import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    margin: 1,

  },

  totalText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 1,
   
  },

  totalText2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 40,
    marginVertical: 30,
    
  },

  totalText3: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 100,
    marginVertical: 5,
    flexDirection: 'column',
  },

  icon: {
    fontSize: 30,
    color: 'black',
    width: 40,
    height: 40,
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
    marginLeft: 100,
  },


  icon2: {
    fontSize: 70,
    color: 'green',
    marginRight: 15,
    marginLeft: 7,
    position: 'absolute', // Lisätty position absolute
    top: 14, // Voit säätää tätä arvoa tarpeidesi mukaan
    left: 12,
  },

 
});
