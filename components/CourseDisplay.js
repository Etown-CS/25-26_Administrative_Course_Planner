// src/components/CourseDisplay.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Your initialized Firestore instance

function CourseDisplay() {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const fetchCoursesFromFirestore = async () => {
      const coursesCollection = collection(db, 'courses'); // Point to your "table" (collection)
      const courseSnapshot = await getDocs(coursesCollection); // Get all documents from it

      const coursesData = courseSnapshot.docs.map(doc => ({
        id: doc.id, // The document's unique ID
        ...doc.data() // All the fields (name, description, credits)
      }));

      setCourseList(coursesData); // Now your React state holds the "table data"
    };

    fetchCoursesFromFirestore();
  }, []);

  return (
    <div>
      <h2>My Course List</h2>
      {courseList.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul>
          {courseList.map(course => (
            <li key={course.id}>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <p>Credits: {course.credits}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseDisplay;
