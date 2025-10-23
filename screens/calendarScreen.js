import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import TimeTable from '@mikezzb/react-native-timetable';

export function CalendarScreen({ route }) {
  const { year, major, concentration } = route.params || {};

  // Show only Monday through Friday
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const dayIndexes = [1, 2, 3, 4, 5]; // JS Date.getDay() mapping

  // Default to today if Mon–Fri, otherwise Monday
  const today = new Date();
  const initialDayIndex = dayIndexes.includes(today.getDay()) ? today.getDay() : 1;
  const [selectedDay, setSelectedDay] = useState(initialDayIndex);

  // Sample timetable data
  const allEvents = [
    {
      courseId: 'CS121',
      title: 'Computer Science 1',
      sections: {
        'Computer Science 1': {
          days: [1, 3], // Mon & Wed
          startTimes: ['16:30', '14:30'],
          endTimes: ['17:15', '16:15'],
          locations: ['In Person'],
        },
        'AT02 - TUT': {
          days: [4], // Thu
          startTimes: ['17:30'],
          endTimes: ['18:15'],
          locations: ['Online'],
        },
      },
    },
  ];

  // Filter events for selected day
  const filteredEvents = allEvents
    .map(event => ({
      ...event,
      sections: Object.fromEntries(
        Object.entries(event.sections).filter(
          ([, section]) => section.days.includes(selectedDay)
        )
      ),
    }))
    .filter(event => Object.keys(event.sections).length > 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Schedule</Text>

      {/* Mon–Fri header (no numbers) */}
      <View style={styles.weekStrip}>
        {daysOfWeek.map((label, index) => {
          const actualDay = dayIndexes[index];
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayButton,
                selectedDay === actualDay && styles.selectedDayButton,
              ]}
              onPress={() => setSelectedDay(actualDay)}
            >
              <Text
                style={[
                  styles.dayLabel,
                  selectedDay === actualDay && styles.selectedDayLabel,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Timetable */}
      <View style={styles.timetableBox}>
        {filteredEvents.length > 0 ? (
          <TimeTable
            eventGroups={filteredEvents}
            eventOnPress={(event) => Alert.alert(`${JSON.stringify(event)}`)}
            // Hide weekday numbers and dates
            showHeader={false} 
            hideDateHeader={true} 
          />
        ) : (
          <Text style={styles.noEventsText}>
            No classes scheduled for {daysOfWeek[dayIndexes.indexOf(selectedDay)]}.
          </Text>
        )}
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
  weekStrip: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  dayButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  selectedDayButton: {
    backgroundColor: '#007AFF',
  },
  dayLabel: {
    fontSize: 16,
    color: '#333',
  },
  selectedDayLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timetableBox: {
    flex: 1,
    marginTop: 20,
  },
  noEventsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default CalendarScreen;
