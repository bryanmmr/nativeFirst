import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComponenteData from './components/ComponenteData';
import { data } from './data';

export default function App() {
  return (
    <View style={styles.container}>
      {data.map((element) => (
        <ComponenteData data={element} key={element.id}/>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
