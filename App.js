import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from '/footer';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nest Planner!!!!</Text>
      <StatusBar style="auto" />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
