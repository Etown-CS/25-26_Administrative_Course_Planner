const admin = requiewire("firebase-admin");

const serviceAccount = require("../path/to/serviceAccountKey.json");

// Initialize the Firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nest-planner.firebaseio.com"
});