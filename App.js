import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Todos from './components/Todos';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Todos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
