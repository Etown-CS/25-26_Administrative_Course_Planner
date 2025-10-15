import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header box */}
      <View style={styles.header}></View>

      <Text style={styles.title}>Make a Schedule</Text>
      <Text style={styles.subtitle}>
        Use the drop down menu to select which best works for you to generate.
      </Text>

      {/* Year box */}
      <View style={styles.year}>
        <Text style={styles.yearTitle}>Year</Text>
      </View>

      {/* Major box */}
      <View style={styles.major}>
        <Text style={styles.majorTitle}>Major</Text>
      </View>

      {/* Concentration box */}
      <View style={styles.concentration}>
        <Text style={styles.concentrationTitle}>Concentration</Text>
      </View>

      {/* Bottom half circle */}
      <View style={styles.halfCircle}></View>

      {/* Generate button */}
      <View style={styles.generate}>
        <Text style={styles.generateTitle}>GENERATE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013d95',
    borderRadius: 15,
    shadowColor: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 15,
    width: '80%',
    fontStyle: 'italic',
    color: '#555',
    marginTop: 5,
    marginLeft: 20,
  },
  year: {
    width: '20%',
    height: 30,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#c70202',
  },
  yearTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
  major: {
    width: '20%',
    height: 30,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#c70202',
  },
  majorTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
  concentration: {
    width: '40%',
    height: 30,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#c70202',
  },
  concentrationTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
  generate: {
    width: '40%',
    height: 30,
    borderRadius: 20,
    marginTop: 350,
    marginLeft: 117,
    backgroundColor: '#031d52',
  },
  generateTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
  halfCircle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 390,
    height: 100,
    backgroundColor: '#3498db',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
