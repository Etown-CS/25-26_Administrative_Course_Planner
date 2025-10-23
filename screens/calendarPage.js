// calendarPage.js
// Fake events data (for now) 
const events = [
  {
    courseId: 'CS121',
    title: 'Computer Science I',
    description: 'Learn the fundamental concepts of Computer Science',
    day: 1, // Monday
    startTime: new Date('1970-01-01T11:00:00'),
    endTime: new Date('1970-01-01T12:20:00'),
    location: 'Esbenshade 281',
    color: 'rgba(241,153,40,1)',
  },
  {
    courseId: 'MA121',
    title: 'Calculus I',
    day: 2, // Tuesday
    startTime: new Date('1970-01-01T09:00:00'),
    endTime: new Date('1970-01-01T10:20:00'),
    location: 'Esbenshade 120',
    color: 'rgba(40,153,241,1)',
  },
  {
    courseId: 'CS310',
    title: 'Web Development',
    day: 4, // Thursday
    startTime: new Date('1970-01-01T14:00:00'),
    endTime: new Date('1970-01-01T15:30:00'),
    location: 'Nicarry 110',
    color: 'rgba(153,40,241,1)',
  },
];

export default events;
