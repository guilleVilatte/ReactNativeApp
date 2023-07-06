import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#D4D7ED',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  task: {
    fontWeight: 'bold',
    padding: 10,
    width: '90%',
  },
  delete: {
    fontWeight: 'bold',
    padding: 10,
    color: 'red',
  },
});
