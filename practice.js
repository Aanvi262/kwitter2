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
  
  function addUser()
  {user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
  }
  );
}