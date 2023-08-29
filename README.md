# Attendance-Tracker

## Prerequisities

**Step 1**: Clone the repository: git clone https://github.com/ritikam29/Attendance-Tracker.git 

**Step 2**: Install the dependencies:
            cd server
            npm i
            
            cd client
            npm 

## To run the Application

1. **SERVER**

   Open CMD, execute command "npm i -g nodemon" to install nodemon globally.
   
   cd server
   npm run dev
   
   The server is running on http://localhost:4000.
   
3. **CLIENT**

    Open CMD 
    cd client
    npm start 
 
    The client is running on http://localhost:3000.


            
## USERS

**Student**

1.Register or Login 

2.Enrol into a course.

3.Upload your pics in the **Face Gallery**(advised tohave atleast 2 pics)

4.Wait for all models to be loaded.

5.The system will perform face detection, ensuring only a single face exists and rejecting any photo with no faces or multiple faces.

6.The photo will be then uploaded to the image storage.

When your lecturer takes the attendance for a particular course, all your uploaded facial data will be counted into the dataset for facial comparison.
Visualize the attendance data in **Attendance History**, or you can view a particular course and click **View Attendance History**.

**Lecturer**

1.Register or Login

2.Create a course.

3.Give the unique ID of the to your students.

4.The photos will be uploaded by the student.

5.After all students have enrolled, select a course and take the attendance.

6.You can see how many students have enroled and their pics.

7.Ensure that the students upload their face photo, otherwise there is no facial data of that student for reference.

8.Only those students who enrol in the particular course will be counted into the dataset for facial classification.

9.Inside the attendance taking form you can select the time and date.

10.Wait for all the models to be loaded.

11.Submit the attendance form when finished.

12.Visualize the attendance data in **Attendance History**, or you can enter a particular course and click **View Attendance History**.

13.You can **Warn** or **Kick** the student out of a course.

14.The face photo of the student who is kicked out will not be counted next time taking the attendance.

## Implementation

The project is built using the face-api.js which is a js api for face detection and face recognition in the browser which uses node.js with tenser flow. 

Regarding the face detection, the API provides 3 kinds of face detection pre-trained models which are MTCNN, SSD MobileNet V1 and Tiny Face. Among these models, I used the SSD MobileNet V1 because it is much more efficient and accurate as compared to the others.

The system is a client-server architecture which contains several modules such as face registration module, face matching module, user module, attendance module and course module. Each module is backed by the resolver in the server to handle the respective GraphQL request query.

## Tech Stack

The project used face.api js which is a Javascript face recognition library which uses state-of-the-art deep learning algorithm and provide a high level API to perform tasks such as age prediction, gender prediction, face expression prediction, face detection, facial landmark detection and face recognition.

1.**ReactJS**-I have used React for building the frontend of the project.React provides high performance, cost-efficient development, modularity, reusable wrapper components, and other benefits for rapid development

2.**NodeJS** - The backend of the project is built using NodeJS. Node. js is very good at handling simultaneous connections. Since IoT is built on many devices sending small messages that must be handled quickly, Node. js makes a good backend for the application, providing serverless architecture and real-time communication support.

3.**MongoDB** - The extracted features are sent over to the server and stored into the database.As a document database, MongoDB makes it easy to store structured or unstructured data.

4.I have used **GraphQL** which basically helps in connecting the frontend and backend of the project. GraphQL is designed to make APIs fast, flexible, and developer-friendly. The project also uses **Apollo Client** which is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

## Screenshots

![image](https://user-images.githubusercontent.com/83155788/170878303-8dc928a3-07d4-452a-91fe-4eb1a18986be.png)

![image](https://user-images.githubusercontent.com/83155788/170878340-e32c426f-46d6-457f-be5b-9d08b22537b1.png)

![image](https://user-images.githubusercontent.com/83155788/170878410-6dde9c9d-2570-4bdb-81e8-672bd50f81cc.png)

![image](https://user-images.githubusercontent.com/83155788/170878451-4f7d19c7-2489-489c-b053-127e6d57c639.png)




