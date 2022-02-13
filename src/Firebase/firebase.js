import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
{
    apiKey: "AIzaSyBrbFi5zFIisntxfR1Y1RJU6yP5FsEeI_c",
    authDomain: "gold-app-d9cba.firebaseapp.com",
    projectId: "gold-app-d9cba",
    storageBucket: "gold-app-d9cba.appspot.com",
    messagingSenderId: "964294790741",
    appId: "1:964294790741:web:4995026dc065283be48edc"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
