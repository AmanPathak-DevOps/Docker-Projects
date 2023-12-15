# Three-Tier Application Deployment using Dockerfile
[![LinkedIn](https://img.shields.io/badge/Connect%20with%20me%20on-LinkedIn-blue.svg)](https://www.linkedin.com/in/aman-devops/)
[![GitHub](https://img.shields.io/github/stars/AmanPathak-DevOps.svg?style=social)](https://github.com/AmanPathak-DevOps)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/u/avian19)

![Architecture](assets/Infra.gif)

This repository demonstrates the deployment of a three-tier application using Docker, focusing on individual Dockerfiles for each component. The application comprises a MySQL database, a Node.js backend, and a React.js frontend.

## Prerequisites

Before you begin, ensure that you have the following installed:

- [Docker](https://www.docker.com/get-started)
  
## Project Structure

- **backend**: Node.js application serving as the backend.
- **frontend**: React.js application for the frontend.
- **mysql**: Dockerfile and configurations for the MySQL database.

## Deployment Steps

1. **MySQL Database:**

   - Navigate to the `mysql` directory.
   - Build the MySQL Docker image:
     ```bash
     docker build -t mysql-image .
     ```
   - Run the MySQL container:
     ```bash
     docker run --name mysql-container --network=three-tier-network -p 3306:3306 -v mysql-data:/var/lib/mysql -d mysql-image
     ```
   - Access the MySQL container:
     ```bash
     docker exec -it mysql-container /bin/bash
     ```
   - Inside the container, create tables for the database:
     ```sql
     USE school;
     CREATE TABLE student (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40), roll_number INT, class VARCHAR(16));
     CREATE TABLE teacher (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40), subject VARCHAR(40), class VARCHAR(16));
     ```

2. **Backend Application:**

   - Navigate to the `backend` directory.
   - Build the backend Docker image:
     ```bash
     docker build -t backend .
     ```
   - Run the backend container:
     ```bash
     docker run -d -p 3500:3500 --name backend-container --network=three-tier-network backend
     ```

3. **Frontend Application:**

   - Navigate to the `frontend` directory.
   - Build the frontend Docker image:
     ```bash
     docker build -t frontend .
     ```
   - Run the frontend container:
     ```bash
     docker run -d --name frontend-container --network=three-tier-network -p 80:80 frontend
     ```

4. **Access the Application:**

   Open your favorite browser and visit [http://localhost:80](http://localhost:80). Enjoy exploring the MERN stack application!

## Data Persistence

Data persistence is ensured by using Docker volumes. If the MySQL container is deleted, data remains available and is automatically added to a new Docker container by providing the same Docker volume.

Feel free to explore and modify the Dockerfiles to enhance your understanding of containerization and deployment! Happy coding! 🚀