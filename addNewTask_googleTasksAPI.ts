import { google } from 'googleapis';
import fs from 'fs';

async function addTask() {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'D:/Shiftmed_Automation-main/gcp-key.json',
        scopes: ['https://www.googleapis.com/auth/tasks'],
    });

    const tasks = google.tasks({ version: 'v1', auth });

    const res = await tasks.tasks.insert({
        tasklist: '@default',
        requestBody: {
            title: 'New Task from Playwright POC - 2',
            notes: 'This task was added via the Google Tasks API - IH.',
        },
    });

    console.log('Task added:', res.data);
}

addTask();
