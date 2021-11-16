const firebaseConfig = {
    apiKey: "AIzaSyCn-vb1MjZ0Iltzc4qoeo3dRHlH2f09edI",
    authDomain: "project-94-5e1a6.firebaseapp.com",
    projectId: "project-94-5e1a6",
    storageBucket: "project-94-5e1a6.appspot.com",
    messagingSenderId: "631553066548",
    appId: "1:631553066548:web:5e831c124d1d2580c4ec61"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome:"+user_name;

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_room.html";
  }

  function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {
  document.getElementById("output").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row="<div class='' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
//End code
});});}
getData();

function redirectToRoomName(){
localStorage.setItem("room_name");
window.location="kwitter_page.html";
}

function logout(){
 localStorage.removeItem("room_name");
 localStorage.removeItem("user_name");
window.location="index.html";
}