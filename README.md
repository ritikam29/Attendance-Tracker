# Attendance-Tracker
**Prerequisites**

**Step 1**: Clone the repository: git clone https://github.com/ritikam29/Attendance-Tracker.git 

**Step 2**: Install the dependencies:
            cd server
            npm i
            
            cd client
            npm i
            
**Step 3**: Create an account in MongoDB Cloud
          
           Create a project in MongoDB cloud named Attendance-Tracker. Select **connect** and choose **Node.js** to get the connection string.
           
**Step 4**: Create an account in Cloudinary media storage and configure 

             Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery.Get the **api key** and **app secret**.
             
**Step 5**: Create Google OAuth Credential to enable google login and sending emails
  1.Go to GCP console: https://console.cloud.google.com/apis.
  2.Create an OAuth credential for google login.
  3.Create an OAuth credential for sending emails.
 
**Step 6**: Configure server environment variables
Inside the "server" folder, create a file named ".env" used to save the credentials of the database, API and so on.
Inside the".env" file, create 10 variables named "MONGO_URI", "SECRET_KEY", "CLOUDINARY_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET", "GOOGLE_OAUTH_USERNAME", "GOOGLE_OAUTH_CLIENT_ID", "GOOGLE_OAUTH_CLIENT_SECRET", "GOOGLE_OAUTH_REFRESH_TOKEN" and "GOOGLE_OAUTH_REDIRECT_URI".
The .env file that was used for the project:
 PORT=4000
 MONGO_URI = 'mongodb+srv://ritika29:ritika12@cluster0.mm7izr6.mongodb.net/?retryWrites=true&w=majority' //getting the connection string from Mongodb
 SECRET_KEY = 'uHRQzuVUcfwT9G21' //secret key can be assigned to any string
 CLOUDINARY_NAME = disinyc9d     //the name is obtained from the cloudinary website
 CLOUDINARY_API_KEY = 288268824736841 //the API_KEY is obtained from the cloudinary website
  CLOUDINARY_API_SECRET = hhRFyHgJ6SikBGm2gYhpNCamiA8 //the API_SECRET is obtained from the cloudinary website
  GOOGLE_OAUTH_USERNAME = mahapatraritika2002@gmail.com // the email id that had been logged into the GCP console
  GOOGLE_OAUTH_CLIENT_ID = 984359907422-hv5sr1uk0uunrrgs4h4fpo82cenr5k73.apps.googleusercontent.com // Under the **Credentials" tab** select "mail" OAuth client and copy the app id.
  GOOGLE_OAUTH_CLIENT_SECRET = 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 // Under the **Credentials" tab** select "mail" OAuth client and copy the secret.
  GOOGLE_OAUTH_REFRESH_TOKEN = 1//04Doh4cpScUnoCgYIARAAGAQSNwF-L9Ir0Nv4JR6UcFnYOyz1pOpVVpfQNq0wSp5jKadGGi5B3NRJUEUcyb1QY7fx7q2Xk480uUU //( Go to https://developers.google.com/oauthplayground, enter scope: "https://mail.google.com".
Before submiting, click the setting icon on the top right.
Click "Use your own OAuth credentials"
Enter "Client ID" and "Client Secret" of "mail" OAuth client.
Submit the API scope.
You will get an authorization code, exchange it with access token and refresh token.
Assign the refresh token to GOOGLE_OAUTH_REFRESH_TOKEN)
 GOOGLE_OAUTH_REDIRECT_URI = https://developers.google.com/oauthplayground


            


Tech Stack used in the project:

The project used face.api js which is a Javascript face recognition library which uses state-of-the-art deep learning algorithm and provide a high level API to perform tasks such as age prediction, gender prediction, face expression prediction, face detection, facial landmark detection and face recognition.

1.**ReactJS**-I have used React for building the frontend of the project.React provides high performance, cost-efficient development, modularity, reusable wrapper components, and other benefits for rapid development

2.**NodeJS** - The backend of the project is built using NodeJS. Node. js is very good at handling simultaneous connections. Since IoT is built on many devices sending small messages that must be handled quickly, Node. js makes a good backend for the application, providing serverless architecture and real-time communication support.

3.**MongoDB** - The extracted features are sent over to the server and stored into the database.As a document database, MongoDB makes it easy to store structured or unstructured data.

4.I have used **GraphQL** which basically helps in connecting the frontend and backend of the project. GraphQL is designed to make APIs fast, flexible, and developer-friendly. The project also uses **Apollo Client** which is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

