import { Firestore } from "@google-cloud/firestore";

// Explicitly define Firestore connection with credentials
const firestore = new Firestore({
  projectId: "stellar-day-451912-v6", // Replace with your actual GCP project ID
  keyFilename: "D:/Shiftmed_Automation-main/gcp-key.json"
});

async function listDocuments() {
  try {
    const usersCollection = await firestore.collection("users").get(); // Use 'firestore' instead of 'db'
    
    if (usersCollection.empty) {
      console.log("No documents found in 'users' collection.");
      return;
    }

    usersCollection.forEach(doc => {
      console.log(`Document found: ${doc.id}`);
    });
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

listDocuments();
