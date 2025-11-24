// calendarPage.js
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

const firebaseConfig = { //refernece firebase.js
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... rest of your config
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getEvents = async () => {
  try {

    const querySnapshot = await getDocs(collection(db, "classes"));
    
    const events = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        courseId: data.courseId,
        title: data.title,
        description: data.description,
        day: data.day,
        startTime: data.startTime,
        endTime: data.endTime,
        location: data.location,
        color: data.color,
      };
    });

    // if course is not found
    return events;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    return []; 
  }
};

export default getEvents;
