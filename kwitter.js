function adduser(){
    var user=document.getElementById("user-name").value;
localStorage.setItem("user-name",user);
window.location="kwitter_room.html";
}