import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    inputContainer: {
      paddingTop: StatusBar.currentHeight,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input: {
      flex: 0.95,
      borderWidth: 0.7,
      borderRadius: 8,
      color: '#212121',
      padding: 3,
    },
    taskListContainer: {
      marginTop: 25,
    },
    taskContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      backgroundColor: '#D4D7ED',
      borderRadius: 10,
      shadowColor: "#000",
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
      color: 'red'
    },
    modalContainer: {
      flex: 1,
      marginTop: 50,
      alignItems: 'center',
      gap: 15,
    },
    modalTitle: {
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalBody: {
      paddingHorizontal: 10,
    },
    modalButtons: {
      flexDirection: 'row',
      gap: 50,
    }
  });