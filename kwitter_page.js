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


function getData() {
      firebase.database().ref("/" + Room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data('name');
                        message = message_data('message');
                        like = message_data('like');
                        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon_thumbs_up'>like: " + like + "</span><button><hr>";
                        row = message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;

                        function send() {
                              msg = document.getElementById("msg").value;
                              firebase.database().ref("room_name").push({
                                    name: user_name,
                                    message: msg,
                                    like: 0
                              })

                              document.getElementById("msg").value = "";

                        }


                  }
            });
      });
}
getData();

function updateLike(message_id) {
      console.log("clicked like button - " + message_id)
      like = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      });

}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html")
}