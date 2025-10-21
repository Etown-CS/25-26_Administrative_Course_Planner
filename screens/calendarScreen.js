import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import TimeTable from '@mikezzb/react-native-timetable';

export function CalendarScreen({ route }) {
  const { year, major, concentration } = route.params || {};
  
  // Get the current day and week days
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today.getDay()); // 0 = Sunday

  // Generate the next 7 days (not a specific week)
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + i); // adjust to start from Sunday
    return {
      label: date.toLocaleDateString('en-US', { weekday: 'short' }), // "Sun", "Mon", etc.
      date: date.toISOString().split('T')[0], // "2025-10-21"
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Schedule</Text>

      {/* 7-day Week Strip */}
      <View style={styles.weekStrip}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayButton,
              selectedDay === index && styles.selectedDayButton,
            ]}
            onPress={() => {
              setSelectedDay(index);
              console.log('Selected:', day.date);
            }}
          >
            <Text
              style={[
                styles.dayLabel,
                selectedDay === index && styles.selectedDayLabel,
              ]}
            >
              {day.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Timetable section */}
      <View style={styles.timetableBox}>
        <TimeTable
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
    paddingHorizontal: 10,
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
});

export default CalendarScreen;
