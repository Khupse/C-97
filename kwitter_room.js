
const firebaseConfig = {
      apiKey: "AIzaSyDZBr6bN91MoarZLXKGW9TP4KQGJYJu9PU",
      authDomain: "kwitter-35dbb.firebaseapp.com",
      databaseURL: "https://kwitter-35dbb-default-rtdb.firebaseio.com",
      projectId: "kwitter-35dbb",
      storageBucket: "kwitter-35dbb.appspot.com",
      messagingSenderId: "319165445320",
      appId: "1:319165445320:web:c0fb543c31a445428161fd"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-" + Room_names);
row = "<div class = 'room_name' id="+ Room_names +" onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
  document.getElementById("output").innerHTML += row   ; 
      });});}
getData();



function addRoom(){

      room_name = document.getElementById("room_name").value ; 
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";      
      
 }
 

  function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html";
  }

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}













  