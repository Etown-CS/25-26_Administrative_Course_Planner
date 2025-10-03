import TimeTable from '@mikezzb/react-native-timetable';

// ...

<TimeTable
  events={[
  {
    courseId: 'CS121',
    title: 'Computer Science I',
    description: 'learn the fundamentals concepts of Computer Science (This description will be better in the final version)',
    week: 1,
    startTime: '11:00',
    endTime: '12:20',
    location: 'Esbenshade 281',
    color: 'rgba(241,153,40,1)',
  },
  {
    courseId: 'MA121',
    title: 'Calculus I',
    section: 'A - LEC',
    week: 1,
    startTime: '11:00',
    endTime: '12:20',
    location: 'Esbenshade 281',
    color: 'rgba(241,153,40,1)',
  },
  {
    courseId: 'CS310',
    title: 'Web Development',
    section: 'A - LEC',
    week: 1,
    startTime: '11:00',
    endTime: '12:20',
    location: 'Esbenshade 281',
    color: 'rgba(241,153,40,1)',
  }]}
  eventOnPress={(event) => Alert.alert(`${JSON.stringify(event)}`)}
/>