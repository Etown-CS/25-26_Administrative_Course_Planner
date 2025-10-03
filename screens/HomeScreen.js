import React from 'react';
import { TextInput, View, Text, Alert, StyleSheet } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
    return (
    <View style={styles.container}>

<<<<<<< HEAD
    {/* this is where i put the header box */}
    <View style={styles.header}>
    </View>

      <Text style={styles.title}>Make a Schedule</Text>
      <Text style={styles.subtitle}>Use the drop down menu to select which best works for you to generate.
      </Text>
    
    {/* this is the year box */}
    <View style={styles.year}>
        <Text style={styles.yearTitle}>Year</Text>
    </View>

    {/* this is the major box */}
    <View style={styles.major}>
        <Text style={styles.majorTitle}>Major</Text>
    </View>

    {/* this is the concentration box */}
    <View style={styles.concentration}>
        <Text style={styles.concentrationTitle}>Concentration</Text>
    </View>

    {/* this is the bottom circle */}
    <View style={styles.halfCircle}>
        <Text style={styles.halfCircle}></Text>
    </View>

    {/* this is the generate circle */}
    <View style={styles.generate}>
        <Text style={styles.generateTitle}>GENERATE</Text>
    </View>

=======
{/*<this is where i put the header box>*/}
    <View style={styles.header}>
    </View>
      <Text style={styles.title}>Make a Schedule</Text>
      <Text style={styles.subtitle}>Use the drop down menu to select which best works for you to generate.</Text>
>>>>>>> 13bebfb (the title and text)
    </View>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 288fd44 (adding blue box to top of page)

const styles = StyleSheet.create({

    header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013d95ff',
    borderradius: 15,
    shadowColor: '#000',
    },

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
>>>>>>> 13bebfb (the title and text)
=======


>>>>>>> 288fd44 (adding blue box to top of page)
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',  
<<<<<<< HEAD
    backgroundColor: 'hsla(0, 0%, 100%, 1.00)',

=======
>>>>>>> 13bebfb (the title and text)
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
<<<<<<< HEAD
    marginTop: 20,
=======
    marginTop: 100,
>>>>>>> 13bebfb (the title and text)
    marginLeft: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 15,
    width: '80%',
    fontStyle: 'italic',
    flexWrap: 'wrap',
    color: '#555',
    marginTop: 5,
    marginLeft: 20,
  },
<<<<<<< HEAD

    year: {
    width: '20%',
    height: 30,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#c70202ff',
    shadowColor: '#000',
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
    backgroundColor: '#c70202ff',
    shadowColor: '#000',
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
    backgroundColor: '#c70202ff',
    shadowColor: '#000',
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
    backgroundColor: '#031d52ff',
    shadowColor: '#000',
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
    left: '0%',
    width: 390, 
    height: 100,
    backgroundColor: '#3498db',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    
    },

});
=======
});
>>>>>>> 13bebfb (the title and text)
