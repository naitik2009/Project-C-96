//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCEisIWfhBNPfXs931uCa6CNXFL_6LMPbM",
      authDomain: "c-abf99.firebaseapp.com",
      projectId: "c-abf99",
      storageBucket: "c-abf99.appspot.com",
      messagingSenderId: "301897104426",
      appId: "1:301897104426:web:446307c615f34f08a91753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById(msg).value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}
P

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();