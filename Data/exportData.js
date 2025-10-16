// exportAllData.js
const admin = require('firebase-admin');
const fs = require('fs'); // Node.js File System module
const path = require('path'); // Node.js Path module for resolving file paths

// --- Configuration ---
// IMPORTANT: Replace with the actual path to your downloaded service account key JSON file.
// Example: './service-account-key.json' if it's in the same folder.
// Or: './path/to/your-nest-planner-service-account-key.json'
const serviceAccountPath = './your-nest-planner-service-account-key.json'; 

// Output file name for the exported data
const outputFileName = 'nest_planner_all_collections_export.json';

// --- Initialize Firebase Admin SDK ---
try {
  const serviceAccount = require(path.resolve(serviceAccountPath));
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log('Firebase Admin SDK initialized successfully.');
} catch (error) {
  console.error('Error initializing Firebase Admin SDK. Check serviceAccountPath and file existence:', error.message);
  process.exit(1); // Exit if initialization fails
}


const db = admin.firestore();

async function exportAllFirestoreCollections() {
  const allExportedData = {}; // This object will hold all your collections

  try {
    // 1. Get a list of all top-level collections
    const collections = await db.listCollections();
    console.log(`Found ${collections.length} top-level collections.`);

    // 2. Iterate through each collection
    for (const collectionRef of collections) {
      const collectionName = collectionRef.id;
      console.log(`Exporting collection: "${collectionName}"`);

      const collectionData = {};
      const snapshot = await collectionRef.get();

      // 3. Add each document from the current collection to collectionData
      snapshot.forEach(doc => {
        collectionData[doc.id] = doc.data();
      });

      // 4. Store the collection's data in the main allExportedData object
      allExportedData[collectionName] = collectionData;
      console.log(`Exported ${snapshot.size} documents from "${collectionName}".`);
    }

    // 5. Convert to JSON and save to a file
    const jsonContent = JSON.stringify(allExportedData, null, 2); // 'null, 2' for pretty printing
    fs.writeFileSync(outputFileName, jsonContent, 'utf8');

    console.log(`\nAll data exported successfully to ${outputFileName}`);
    console.log('You can now use this JSON file in your project or for backup purposes.');

  } catch (error) {
    console.error('Error exporting all collections:', error);
  }
}

// Run the export function
exportAllFirestoreCollections();
