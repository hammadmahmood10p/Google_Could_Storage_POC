import { Storage } from "@google-cloud/storage";

// Use absolute path to your JSON key file
const storage = new Storage({ keyFilename: "D:/Shiftmed_Automation-main/gcp-key.json" });

async function listBuckets() {
    try {
        const [buckets] = await storage.getBuckets();
        console.log("Buckets in your GCP project:");
        buckets.forEach(bucket => console.log(bucket.name));
    } catch (error) {
        console.error("Error listing buckets:", error);
    }
}

listBuckets();
