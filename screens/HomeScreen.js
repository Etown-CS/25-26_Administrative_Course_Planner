import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import CalendarScreen from './calendarScreen';

export default function HomeScreen({navigation}) {
  // const navigation = useNavigation();
  // Year dropdown
  const [openYear, setOpenYear] = useState(false);
  const [valueYear, setValueYear] = useState('Freshman');
  const [itemsYear, setItemsYear] = useState([
    { label: '2026', value: 'Senior' },
    { label: '2027', value: 'Junior' },
    { label: '2028', value: 'Sophomore' },
    { label: '2029', value: 'Freshman' },
  ]);

  // Major dropdown
  const [openMajor, setOpenMajor] = useState(false);
  const [valueMajor, setValueMajor] = useState('Computer Science');
  const [itemsMajor, setItemsMajor] = useState([
    { label: 'Computer Science', value: 'Computer Science' },
  ]);

  // Concentration dropdown
  const [openConcentration, setOpenConcentration] = useState(false);
  const [valueConcentration, setValueConcentration] = useState('Hardware');
  const [itemsConcentration, setItemsConcentration] = useState([
    { label: 'Hardware', value: 'Hardware' },
    { label: 'Cybersecurity', value: 'Cybersecurity' },
    { label: 'Software Development', value: 'Software Engineering' },
    { label: 'Web & Application Design', value: 'Design' },
    { label: 'Artificial Intelligence & Data Science', value: 'AI' },
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}></View>

      <Text style={styles.title}>Make a Schedule</Text>
      <Text style={styles.subtitle}>
        Use the drop down menu to select which best works for you to generate.
      </Text>

      {/* Year dropdown */}
      <View style={[styles.dropdownWrapper, { zIndex: 3000 }]}>
        <View style={styles.labelBubble}>
          <Text style={styles.label}>Year</Text>
        </View>
        <DropDownPicker
          open={openYear}
          value={valueYear}
          items={itemsYear}
          setOpen={setOpenYear}
          setValue={setValueYear}
          setItems={setItemsYear}
          placeholder="Select year"
          listMode="SCROLLVIEW"
          style={styles.dropdown}
          dropDownContainerStyle={[styles.dropDownContainer, { zIndex: 4000 }]}
        />
      </View>

      {/* Major dropdown */}
      <View style={[styles.dropdownWrapper, { zIndex: 2000 }]}>
        <View style={styles.labelBubble}>
          <Text style={styles.label}>Major</Text>
        </View>
        <DropDownPicker
          open={openMajor}
          value={valueMajor}
          items={itemsMajor}
          setOpen={setOpenMajor}
          setValue={setValueMajor}
          setItems={setItemsMajor}
          placeholder="Select major"
          listMode="SCROLLVIEW"
          style={styles.dropdown}
          dropDownContainerStyle={[styles.dropDownContainer, { zIndex: 3000 }]}
        />
      </View>

      {/* Concentration dropdown */}
      <View style={[styles.dropdownWrapper, { zIndex: 1000 }]}>
        <View style={styles.labelBubble}>
          <Text style={styles.label}>Concentration</Text>
        </View>
        <DropDownPicker
          open={openConcentration}
          value={valueConcentration}
          items={itemsConcentration}
          setOpen={setOpenConcentration}
          setValue={setValueConcentration}
          setItems={setItemsConcentration}
          placeholder="Select concentration"
          listMode="SCROLLVIEW"
          style={styles.dropdown}
          dropDownContainerStyle={[styles.dropDownContainer, { zIndex: 2000 }]}
        />
      </View>

      {/* Bottom half circle */}
      <View style={styles.halfCircle}></View>

      {/* Generate button */}
      <Pressable onPress={() => navigation.navigate('CalendarScreen', {
        year: valueYear,
        major: valueMajor,
        concentration: valueConcentration,
      })}>
      <View style={styles.generate}>
        <Text style={styles.generateTitle}>GENERATE</Text>
      </View>
      </Pressable>
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
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013d95',
    borderRadius: 10,
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
  dropdownWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  labelBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#c70202',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  dropdown: {
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  dropDownContainer: {
    borderColor: '#ddd',
    backgroundColor: '#fff',
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
    color: '#ffffffff',
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
