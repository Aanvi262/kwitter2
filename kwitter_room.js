
 var firebaseConfig = {
      apiKey: "AIzaSyDwV1qa1g6uhyAYBHjyNTiF2IYtrOIGyko",
      authDomain: "kwitter-46974.firebaseapp.com",
      databaseURL: "https://kwitter-46974-default-rtdb.firebaseio.com",
      projectId: "kwitter-46974",
      storageBucket: "kwitter-46974.appspot.com",
      messagingSenderId: "1016546090441",
      appId: "1:1016546090441:web:714c9d453ccc1235015c18",
      measurementId: "G-030KN1QJEQ"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";  
}