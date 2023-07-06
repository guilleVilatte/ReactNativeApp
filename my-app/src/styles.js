import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  taskListContainer: {
    marginTop: 25,
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
  },
});
