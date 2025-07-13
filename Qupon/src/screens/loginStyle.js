import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    marginBottom: 20,
  },

  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: 'lightgray',
    textAlign: 'center',
    marginBottom: 30,
  },

  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  countryCode: {
    fontSize: 16,
    color: 'black',
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: 'black',
  },

  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  terms: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});
