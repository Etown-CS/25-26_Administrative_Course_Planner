import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal} from "react-native";

const classData = [
  { title: "Computer Science I", id: "CS121", location: "Esbenshade 281", day: ["Mon", "Wed", "Fri"], time: "11:00", color: "#FFD166",},
  { title: "Calculus I", id: "MA121", location: "Nicarry 124", day: ["Mon", "Wed", "Fri"], time: "9:30", color: "#06D6A0",},
  { title: "Software Engineering", id: "CS341", location: "CS Lounge", day: ["Tue", "Thu"], time: "9:30", color: "#119AB2", },
];

export function CalendarScreen() {
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [selectedClass, setSelectedClass] = useState(null);

  // Define time slots
  const timeSlots = ["8:00", "9:30", "11:00", "12:30", "2:00"];

  // Filter events by selected day (supports multiple days per class)
  const filteredClasses = classData.filter((c) => c.day.includes(selectedDay));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weekly Schedule</Text>

      {/* Day Selector */}
      <View style={styles.daySelector}>
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              selectedDay === day && styles.dayButtonSelected,
            ]}
            onPress={() => setSelectedDay(day)}
          >
            <Text
              style={[
                styles.dayText,
                selectedDay === day && styles.dayTextSelected,
              ]}
            >
            {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

     {/* Timetable */}
     <ScrollView style={styles.scrollContainer}>
        {timeSlots.map((time) => {
          const event = filteredClasses.find((c) => c.time === time);
          return (
            <View key={time} style={styles.row}>
              <Text style={styles.timeText}>{time}</Text>
              <View style={styles.eventBox}>
                {event ? (
                  <TouchableOpacity
                    style={[styles.event, { backgroundColor: event.color }]}
                    onPress={() => setSelectedClass(event)}
                  >
                    <Text style={styles.eventTitle}>{event.id}</Text>
                    <Text style={styles.eventLocation}>{event.location}</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.emptySlot} />
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Modal for Class Info */}
      <Modal
        visible={!!selectedClass}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedClass(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {selectedClass && (
              <>
                <Text style={styles.modalTitle}>{selectedClass.title}</Text>
                <Text style={styles.modalText}>Course ID: {selectedClass.id}</Text>
                <Text style={styles.modalText}>Time: {selectedClass.time}</Text>
                <Text style={styles.modalText}>Location: {selectedClass.location}</Text>
                <TouchableOpacity
                  onPress={() => setSelectedClass(null)}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  daySelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    padding: 6,
  },
  dayButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  dayButtonSelected: {
    backgroundColor: "#007bff",
  },
  dayText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  dayTextSelected: {
    color: "#fff",
  },
  scrollContainer: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  timeText: {
    width: 60,
    fontSize: 15,
    color: "#444",
  },
  eventBox: {
    flex: 1,
    height: 45,
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  event: {
    padding: 8,
    borderRadius: 8,
  },
  eventTitle: {
    fontWeight: "bold",
    color: "#333",
  },
  eventLocation: {
    fontSize: 12,
    color: "#333",
  },
  emptySlot: {
    height: "100%",
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 15,
    color: "#444",
    marginBottom: 5,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 15,
    alignSelf: "center",
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CalendarScreen;
