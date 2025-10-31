import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../components/firebase"; // make sure firebase.js exports 'db'

export function CalendarScreen({ year = "Sophomore", major = "CS", concentration = "Software", semester = "Fall" }) {
  const [classData, setClassData] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const timeSlots = ["8:00", "9:30", "11:00", "12:30", "2:00"];

  // ✅ Fetch classes from Firestore
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const q = query(
          collection(db, "classes"),
          where("major", "==", major),
          where("concentration", "==", concentration),
          where("semester", "==", semester)
        );

        const querySnapshot = await getDocs(q);
        const fetchedClasses = querySnapshot.docs.map((doc) => doc.data());
        setClassData(fetchedClasses);
        console.log("Fetched classes:", fetchedClasses);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, [year, major, concentration, semester]);

  const getEvent = (day, time) =>
    classData.find((c) => c.day?.includes(day) && c.time === time);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weekly Schedule - {semester} {year}</Text>

      <View style={styles.tableHeader}>
        <View style={styles.timeColumnHeader} />
        {days.map((day) => (
          <Text key={day} style={styles.dayHeaderText}>{day}</Text>
        ))}
      </View>

      <ScrollView style={styles.scrollContainer}>
        {timeSlots.map((time) => (
          <View key={time} style={styles.row}>
            <Text style={styles.timeText}>{time}</Text>
            {days.map((day) => {
              const event = getEvent(day, time);
              return (
                <View key={day} style={styles.eventBox}>
                  {event ? (
                    <TouchableOpacity
                      style={[styles.event, { backgroundColor: event.color || "#ccc" }]}
                      onPress={() => setSelectedClass(event)}
                    >
                      <Text style={styles.eventTitle}>{event.title}</Text>
                      <Text style={styles.eventLocation}>{event.location}</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.emptySlot} />
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>

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
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingRight: 8,
  },
  timeColumnHeader: {
    width: 50,
  },
  dayHeaderText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  timeText: {
    width: 50,
    fontSize: 14,
    color: "#444",
  },
  eventBox: {
    flex: 1,
    height: 55,
    marginHorizontal: 2,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  event: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  eventTitle: {
    fontWeight: "bold",
    color: "#333",
  },
  eventLocation: {
    fontSize: 11,
    color: "#333",
  },
  emptySlot: {
    height: "100%",
    width: "100%",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "95%",
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
