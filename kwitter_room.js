
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAo3frneGpoKT0M-ehVnpTByoKmW4yGlH8",
      authDomain: "kwitter-6fdb9.firebaseapp.com",
      databaseURL: "https://kwitter-6fdb9-default-rtdb.firebaseio.com",
      projectId: "kwitter-6fdb9",
      storageBucket: "kwitter-6fdb9.appspot.com",
      messagingSenderId: "797792214571",
      appId: "1:797792214571:web:8f1d1d00e977855c0d946e",
      measurementId: "G-RK2EHQGHWQ"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user-name");
    document.getElementById("user-name").innerHTML="welcome"+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttorooomname(this.id)'># "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttorooomname(name){
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function logout() {
localStorage.removeItem("user-name");
localStorage.removeItem("room_name");
window.location="index.html";
}