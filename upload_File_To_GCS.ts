import { Storage } from '@google-cloud/storage';

const storage = new Storage({ keyFilename: "D:/Shiftmed_Automation-main/gcp-key.json" });
const bucketName = "bucket_one_ih";
const filePath = "D:/Shiftmed_Automation-main/pages/local_File.json";

async function uploadFile() {
    await storage.bucket(bucketName).upload(filePath, {
        destination: "GCP-Text-File.txt",
    });
    console.log(`File uploaded to ${bucketName}`);
}

uploadFile();
