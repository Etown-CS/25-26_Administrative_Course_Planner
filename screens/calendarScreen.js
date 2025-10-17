import React from 'react';
import { View, Text, StyleSheet, Alert } from "react-native";
import { Calendar } from 'react-native-calendars';
import TimeTable from '@mikezzb/react-native-timetable';

export function CalendarScreen({ route }) {
  const { year, major, concentration } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Schedule</Text>

      {/* Calendar section: 1 week prospective calendar*/}
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
        eventGroups={[
          {
            courseId: 'CSCI2100',
            title: 'Data Structures',
            sections: {
              'A - LEC': {
                days: [1, 3],
                startTimes: ['16:30', '14:30'],
                endTimes: ['17:15', '16:15'],
                locations: ['Online Teaching', 'Online Teaching'],
              },
              'AT02 - TUT': {
                days: [4],
                startTimes: ['17:30'],
                endTimes: ['18:15'],
                locations: ['Online Teaching'],
              },
            },
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
