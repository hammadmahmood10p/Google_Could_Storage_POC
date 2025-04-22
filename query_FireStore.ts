import { Firestore } from "@google-cloud/firestore";

// Explicitly define Firestore connection with credentials
const db = new Firestore({
  projectId: "<your project id>",  // Replace with your actual GCP project ID
  keyFilename: "D:/Shiftmed_Automation-main/gcp-key.json"
});

async function getDocument() {
  try {
    const doc = await db.collection("users").doc("testUser").get(); // Change "user1" to "testUser"
    if (doc.exists) {
      console.log("User Data:", doc.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}

getDocument();
