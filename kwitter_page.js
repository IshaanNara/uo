//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ 
           name:user_name,
           message:msg,
           like:0 
      });
      document.getElementById("msg").innerHTML="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
n="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
m="<h4 class='message_h4'>"+message+"</h4>";
l="<button class='btn btn-warning'id="+ firebase_message_id+"value="+like+" onclick='updatedl(this.id)'>";
s="<span class='glyphicon glyphicon-thumbs-up'>LIKE-B "+like+"</span> </button><hr>";
r=n+m+l+s;
document.getElementById("output").innerHTML+=r               
//End code
      } });  }); }
getData();
function updatedl(message_id){
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout() {
  localStorage.removeItem("user-name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  }