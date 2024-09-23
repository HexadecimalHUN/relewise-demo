# Relewise Project 
This repository contains multiple services that work together to provide a backend API, a frontend application, and an additional Node.js-based backend service. 
## Project Structure
 - **back-end.API**: The core backend service built with .NET, providing an API to interact with Relewise data.
 - **back-end.BLL**: The Business Logic Layer for the backend, handling business rules and processing data. 
 - **back-end.DAL**: The Data Access Layer, responsible for retrieving and storing data in the database
 - **back-end.Shared**: Shared utilities, classes, and interfaces used across the backend services. 
 - **front-end**: A Next.js-based frontend application that consumes the API and displays the output. 
 - **node-backend**: An additional backend built using Express.js, implementing certain tasks using JavaScript instead of C#. 
## Services Overview 
### 1. **back-end.API** 
**Description**: This service is a .NET-based backend API that provides endpoints for handling Relewise product data.
 **Technology**: .NET Core, ASP.NET 
 **Port**: `5000` 
 **Dependencies**: This service uses the `back-end.BLL`, `back-end.DAL`, and `back-end.Shared` projects to perform its operations. 
 ### 2. **front-end** 
 **Description**: This is the frontend application built with Next.js. It connects to the backend API and displays the data.
 **Technology**: Next.js (React.js framework) 
 **Port**: `3000` 
 **Dependencies**: Consumes the API from `back-end.API` as well as from `node-backend`. 
 ### 3. **node-backend** 
 **Description**: A Node.js backend service that handles additional Relewise-related tasks, such as downloading JSON product data and mapping it to Relewise products. 
 **Technology**: Node.js, Express.js 
 **Port**: `4000` 
 **Dependencies**: Uses `@relewise/integrations` npm package to create a Relewise data objects to which it maps the fetched data. 
 ## Getting Started 
 This project uses Docker to run all services within containers. To get the application running, follow the steps below. 
 ### Prerequisites
  **Docker**: Ensure you have Docker and Docker Compose installed on your system. 
 ### Installation and Setup 
 1. **Clone the repository**: 
```bash 
	git clone https://github.com/HexadecimalHUN/relewise-demo.git 
	cd relewise-demo
```
2. **Build and run the services with Docker Compose**:
```bash
	docker-compose up --build 
```
3. **Access the services**:

-   **Backend API**: Access the backend API at [http://localhost:5000](http://localhost:5000)
-   **Frontend**: Access the frontend application at [http://localhost:3000](http://localhost:3000)
-   **Node.js Backend**: The Node.js backend runs on [http://localhost:4000](http://localhost:4000)
- ### Running Individual Services

-   **Frontend**:
    
    If you want to run just the frontend locally without Docker:
```bash
	cd front-end
	npm install
	npm run ded
```
   
    
-   **Node.js Backend**:
    
    To run the Node.js backend locally:
    
```bash
	cd node-backend
	npm install
	npm start
```
    
-   **.NET API Backend**:
    
    If you prefer to run the .NET API without Docker, you can run it via the CLI:
    
```bash
	cd back-end.API
	dotnet run
```
    

### Stopping the Services

To stop all services, run:

```bash
	docker-compose down
```

### Troubleshooting

-   **Port conflicts**: Ensure no other services are running on ports `3000`, `4000`, or `5000` to avoid conflicts.
