# SimpleTimeService
This is a simple Node.js web service that returns the current timestamp and the IP address of the visitor in JSON format. It is also containerized using Docker and configured to run as a non-root user.

## Prerequisites
* **Git:** You need to have Git installed on your system. You can find installation instructions here: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* **Docker:** You need to have Docker installed on your system. You can find installation instructions for your operating system on the official Docker website: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

## Option 1:  Steps to Clone, Build, and Run the Docker Container (Locally)
### 1. Clone the Repository
$ git clone https://github.com/Neha-Maurya95/SimpleTimeService.git \
$ cd SimpleTimeService

### 2. Build the Docker Image
Open your terminal in the directory containing the app.js and Dockerfile files and run the following command:

$ docker build -t simple-time-service .

### 3. Run the Docker Container
Once the image is built successfully, you can run a container from it using the following command:

$ docker run -d -p 3000:3000 simple-time-service

### 4. Accessing the Application
Once the container is running, you can access the web service by opening your web browser or using a tool like curl to the following URL:

http://localhost:3000/

## Option 2: Steps to Pull and Run the Docker Container (Using Docker Hub)
If you don't want to build the image locally, you can directly pull a pre-built image from Docker Hub.

### 1. Pull the Docker Image from Docker Hub
Open your terminal and run the following command to pull the image from the public Docker Hub registry:
$ docker pull nehamaurya/simple-time-service

### 2. Run the Docker Container
Once the image is pulled successfully, you can run a container from it using the following command:
$ docker run -p 3000:3000 nehamaurya/simple-time-service

### 3. Accessing the Application
Once the container is running, you can access the web service by opening your web browser or using a tool like curl to the following URL:
http://localhost:3000/

