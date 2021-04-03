
# Ract Native App with Typescript+Firebase  
  
A simple Expo react-native application, with Typescript, that's has an integration with Firebase that is responsible to provide an authentication using e-mail and password, and also, this app uses the lib react-navigation, with react hooks, to navigate through the pages.
  
# Project  
  
## What you have to install?  
  
- Node  
- Yarn
- Expo
  
## Firebase Config
You must create a project on Firebase, and then create a web app, and finally, copy the configs and save in this path src/config/Firebase.ts like as this example:

    import  *  as  firebase  from  'firebase';
        
    const  firebaseConfig = {
        apiKey:  'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        authDomain:  'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        databaseURL:  'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        projectId:  'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        storageBucket:  'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        messagingSenderId:  'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        appId:  'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    };
    
    firebase.initializeApp(firebaseConfig);
    
    export  default  firebase;

   

## What you have to do to run the project?  
  
To run the application, you just need to execute the expo init command on project root folder:  
  
 $ expo init
  
