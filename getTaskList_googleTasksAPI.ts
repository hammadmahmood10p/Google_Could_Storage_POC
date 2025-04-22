import { google } from 'googleapis';
import fs from 'fs';

async function getTasks() {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'D:/Shiftmed_Automation-main/gcp-key.json',  // Ensure this file is downloaded from Google Cloud
        scopes: ['https://www.googleapis.com/auth/tasks.readonly'],
    });

    const tasks = google.tasks({ version: 'v1', auth });

    const res = await tasks.tasklists.list();
    console.log('Task Lists:', res.data.items);
}

getTasks();
