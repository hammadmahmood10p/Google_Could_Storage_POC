import { Firestore } from "@google-cloud/firestore";

// Explicitly define Firestore connection with credentials
const firestore = new Firestore({
  projectId: "<Your Project id",  // Replace with your actual GCP project ID
  keyFilename: "D:/Shiftmed_Automation-main/gcp-key.json"
});

async function writeData() {
  try {
    const docRef = firestore.collection("users").doc("userTwo");
    await docRef.set({
      name: "Google Cloud",
      age: 40,
      email: "gcp@example.com"
    });
    console.log("✅ Document successfully written!");
  } catch (error) {
    console.error("❌ Error writing document:", error);
  }
}

writeData();
