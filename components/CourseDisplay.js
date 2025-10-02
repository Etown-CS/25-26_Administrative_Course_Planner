// src/components/CourseDisplay.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../firebase'; // <--- Import your initialized Firestore instance

function CourseDisplay() {
  // 1. State to hold your course data
  const [courses, setCourses] = useState([]);
  // Optional: State for loading status and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Reference to your 'courses' collection in Firestore
        const coursesCollectionRef = collection(db, 'courses');

        // Get all documents from the 'courses' collection
        const querySnapshot = await getDocs(coursesCollectionRef);

        // Map the documents into an array of JavaScript objects
        const coursesData = querySnapshot.docs.map(doc => ({
          id: doc.id,         // Get the document's ID
          ...doc.data()       // Get all the fields (name, description, etc.)
        }));

        // Update the component's state with the fetched data
        setCourses(coursesData);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses.");
      } finally {
        setLoading(false); // Set loading to false once fetching is complete (or failed)
      }
    };

    fetchCourses(); // Call the async function
  }, []); // The empty dependency array [] means this effect runs only once after the initial render

  // 3. Render your component based on the fetched data and loading/error status
  if (loading) {
    return <p>Loading courses...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  const Assignments =[
    {title: "Computer Science I",
    ID: 121,
    Semesters: "fall, spring",
    compengRequired: true,
    csRequired: true,
    engRequired: false,
    infosysRequired: true,
    concentration: false,
    core: true,
    credits: 4,
    grade: "first-year, sophomore",
    workType: "in-person",
    prerequisites: "none",
    },
    {
    title: "Computer Science I",
    ID: 121,
    Semesters: ["fall","spring"],
    compengRequired: true,
    csRequired: true,
    engRequired: false,
    infosysRequired: true,
    concentration: false,
    core: true,
    credits: 4,
    grade: "first-year, sophomore",
    workType: "in-person",
    prerequisites: "none",
    }
  ]

  return (
    <div>
      <h1>Available Courses</h1>
      {courses.length === 0 ? (
        <p>No courses found in the database.</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h2>{course.name}</h2>
              <p>{course.description}</p>
              {/* Example of displaying the prerequisite IDs (if they exist) */}
              {course.prerequisite && course.prerequisite.length > 0 && (
                <p>Prerequisites: {course.prerequisite.map(prereqRef => prereqRef.id).join(', ')}</p>
                // Remember: prereqRef is a DocumentReference. To get names, you'd need another fetch.
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseDisplay;
