import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
  },
  label: {
    fontSize: 18,
    textAlign: 'left',
    justifyContent: 'flex-start',
    color: '#354F52',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    lineHeight: 40,
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: '#2F3E46',
    borderWidth: 0,
    borderRadius: 5,
    padding: 8,
    width: '90%',
    marginBottom: 24,
    backgroundColor: '#f2f2f2',
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#2F3E46',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#CAD2C5',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
