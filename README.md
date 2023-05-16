# E-learning Platform

Project for 'Desafío de Tripulaciones' carried out in collaboration with the Cybersecurity, Data Science, UX/UI, and Marketing verticals for the HIV Treatment Working Group.

It consists of two roles: user and administrator.

The user can register and access through a registration form or Google Auth.

<img src='./client/public/Screenshot from 2023-05-16 22-31-27.png' alt="login" />

Once inside, they can view and take courses.

<img src='./client/public/Screenshot from 2023-05-16 22-31-51.png' alt="courses" />

In the Community section, they can contact the association.

<img src='./client/public/Screenshot from 2023-05-16 22-32-14.png' alt="contact" />

The administrator can create, edit, and delete courses, as well as track user activities.


<img src='./client/public/Screenshot from 2023-05-16 22-33-03.png' alt="create" />

Folder structure

 Store your react app in a folder named client in the root of your project

 2. Install dependencies
  - `npm install `

 3. add script to backend package.json
 ```
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "clientinstall": "npm install --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "deploy": "concurrently \"npm run server\" \"npm run client\""
  },
   ```
  
  4. Add .env variables


  .env.example

Client

```
DB_URL_ATLAS=***
REACT_APP_FIREBASE_API_KEY=***
REACT_APP_FIREBASE_AUTH_DOMAIN=***
REACT_APP_FIREBASE_PROJECT_ID=***
REACT_APP_FIREBASE_STORAGE_BUCKET=***
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=***
REACT_APP_FIREBASE_APP_ID=***
```

Server

SQL
```
DB_HOST=***
DB_USER=***
DB_DATABASE=***
DB_PASSWORD=***

DB_URL_ATLAS=***
```
Auth
```
SECRET_KEY=***
GOOGLE_CLIENT_ID=***
GOOGLE_SECRET=***
JWT_SECRET=***
 
```

  
  5. run server and client with concurrently
  
  - `npm run dev`
  
  7. enjoy



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
