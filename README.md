# 🌐 Google Cloud Platform (GCP)
Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google that runs on the same infrastructure Google uses for its end-user products like Google Search, Gmail, YouTube, and more. GCP provides a robust, scalable, and secure environment for building, testing, and deploying applications and services.

🧰 Key Offerings:
- Compute: Virtual machines (Compute Engine), containers (GKE), serverless computing (Cloud Functions, Cloud Run)

- Storage & Databases: Object storage (Cloud Storage), NoSQL (Firestore, Datastore), SQL (Cloud SQL, Spanner), and data warehousing (BigQuery)

- Networking: Global load balancing, CDN, VPC, Cloud DNS, and more

- AI & ML: Pre-trained and custom ML models (Vertex AI, AutoML, etc.)

- Operations & Monitoring: Logging, monitoring, and error reporting tools via Cloud Operations (formerly Stackdriver)

- Security: Identity and Access Management (IAM), VPC Service Controls, encryption by default

🚀 Benefits:
- Scalability: Easily scale applications from a small app to a global enterprise.

- Reliability: Industry-leading SLAs with built-in redundancy and disaster recovery.

- Security: End-to-end identity, data, and network protection.

- Integration: Native integration with popular open-source tools and APIs, as well as other Google services.

🔗 Common Use Cases:
- Hosting websites and web apps

- Running microservices and containerized applications

- Storing and analyzing big data

- Building and deploying machine learning models

- Enabling secure and reliable DevOps pipelines

## Tech
- TypeScript, Google Could

## Installation

- Sign up on a Google Account using any gmail address
- Enable the Payment Account (Necessary to use GCP services for the free trials too.)
- Enable the APIs you want to use, in my case I enabled Buckets, FireStore and BigQuery
- Create a TypeScript Project and install the GCP dependencies and link your account to start exploring and working

## ☁️ Google Cloud Buckets (Cloud Storage)
Google Cloud Storage provides scalable, secure, and highly durable object storage. It's ideal for storing unstructured data such as media files, backups, logs, and datasets. Buckets are the containers within Cloud Storage that hold your data and support features like:

- Multi-regional, regional, nearline, and coldline storage classes

- Access control with IAM or signed URLs

- Object versioning and lifecycle management

- Easy integration with other GCP services

Use cases: Static website hosting, data archiving, and storing input/output files for data processing.

## 🔥 Firestore (NoSQL Document Database)
Firestore is a flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development. It supports real-time updates and strong consistency with:

- Document-based data model (organized in collections and documents)

- Offline support for mobile/web apps

- Deep integration with Firebase and GCP

- Granular security with Firebase Authentication and Firestore Security Rules

Use cases: Real-time chat apps, user profiles, dynamic web/mobile content, and IoT data management.

## 📊 BigQuery (Serverless Data Warehouse)
BigQuery is Google Cloud’s fully managed, serverless data warehouse that enables super-fast SQL queries over large datasets. It's designed for:

- Interactive and batch analytics

- Real-time analytics with streaming support

- Integration with Google Sheets, Data Studio, and BI tools

- Built-in machine learning (BigQuery ML)

Features:

- Pay-as-you-go pricing model (on-demand or flat-rate)

- SQL support for data analysis

- Federated queries across multiple sources (Cloud Storage, Sheets, etc.)

Use cases: Business intelligence, data warehousing, large-scale reporting, and predictive analytics.