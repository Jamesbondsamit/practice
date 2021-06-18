var firebaseConfig = {
    apiKey: "AIzaSyBIv0LWmi4O3Fj-fsfyacCd74mxPIF04Yo",
    authDomain: "only-firebase-class.firebaseapp.com",
    databaseURL: "https://only-firebase-class-default-rtdb.firebaseio.com",
    projectId: "only-firebase-class",
    storageBucket: "only-firebase-class.appspot.com",
    messagingSenderId: "909020542354",
    appId: "1:909020542354:web:3c740df0ae6f9145e8bd4b",
    measurementId: "G-T8GXMQ26YZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
     user_name=document.getElementById("user_name").value;

     firebase.database().ref("/").child(user_name).update({
         purpose:"adding user"
     });
}