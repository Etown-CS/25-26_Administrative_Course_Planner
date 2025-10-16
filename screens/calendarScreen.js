import React from 'react';
import { View, Text, StyleSheet, Alert } from "react-native";
import { Calendar } from 'react-native-calendars';
import TimeTable from '@mikezzb/react-native-timetable';

export function CalendarScreen({ route }) {
  const { year, major, concentration } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Schedule</Text>
      <Text style={styles.info}>Year: {year}</Text>
      <Text style={styles.info}>Major: {major}</Text>
      <Text style={styles.info}>Concentration: {concentration}</Text>

      {/* Calendar section */}
      <View style={styles.calendarBox}>
        <Calendar
          onDayPress={day => console.log('selected day', day)}
          markedDates={{
            '2025-10-14': { selected: true, marked: true, selectedColor: 'blue' },
          }}
        />
      </View>

      {/* Timetable section */}
      <View style={styles.timetableBox}>
        <TimeTable
        // This is HARD CODE as an example, not a part of the final product.
          events={[
            {
              courseId: 'CS121',
              title: 'Computer Science 1',
              section: 'A - LEC',
              day: 3,
              startTime: '14:30',
              endTime: '16:15',
              location: 'Esbenshade 184',
              color: 'rgba(241,153,40,1)',
              professor: 'Dr. Wang',
            },
          ]}
          eventOnPress={(event) => Alert.alert(`${JSON.stringify(event)}`)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
  calendarBox: {
    marginTop: 20,
  },
  timetableBox: {
    flex: 1,
    marginTop: 20,
  },
});

export default CalendarScreen;
