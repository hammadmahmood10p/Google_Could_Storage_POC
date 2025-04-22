import { BigQuery } from '@google-cloud/bigquery';

// Explicitly define BigQuery connection with credentials
const bigquery = new BigQuery({
  projectId: "stellar-day-451912-v6",  // Replace with your actual GCP project ID
  keyFilename: "D:/Shiftmed_Automation-main/gcp-key.json" // Path to your GCP service account key
});

async function queryBigQuery() {
  try {
    const query = "SELECT refresh_date AS Day, term AS Top_Term, rank, FROM `bigquery-public-data.google_trends.top_terms` WHERE rank = 1 AND refresh_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 2 WEEK) GROUP BY Day, Top_Term, rank ORDER BY Day DESC"; // Replace with your dataset & table

    // Runs the query
    const [rows] = await bigquery.query({ query });
    
    if (rows.length === 0) {
      console.log("No results found.");
    } else {
      console.log("Query Results:");
      rows.forEach(row => console.log(row));
    }
  } catch (error) {
    console.error("Error executing BigQuery query:", error);
  }
}

queryBigQuery();
