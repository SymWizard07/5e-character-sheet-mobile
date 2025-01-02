import { StyleSheet } from 'react-native';

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputText: {
    fontSize: 16,
    color: '#000',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingVertical: 20,
  },
  tabButton: {
    padding: 15,
    borderRadius: 5,
  },
  activeTabButton: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#444',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#666',
  },
  inputText: {
    fontSize: 16,
    color: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 20,
  },
  tabButton: {
    padding: 15,
    borderRadius: 5,
  },
  activeTabButton: {
    backgroundColor: '#0d6efd',
  },
  tabText: {
    fontSize: 16,
    color: '#aaa',
  },
  activeTabText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export { lightTheme, darkTheme };
