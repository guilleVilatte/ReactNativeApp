import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
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
});
