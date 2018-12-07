$ npm install firebase --save

firebase.database().goOnline();

var firebase = require("firebase");

import firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyC_veJn4cOL3jyxXyF4zimfBFNUsnSCL9Q",
  authDomain: "helppingfinal.firebaseapp.com",
  databaseURL: "https://helppingfinal.firebaseio.com",
  storageBucket: "helppingfinal.appspot.com",
};
firebase.initializeApp(config);

	var ref = firebase.database().ref();                           
	ref.on("value", function(snapshot){
  	output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});

	var Location = firebase.database().ref("Position")
	Location.once("latitude").then(function(snapshot) {
	snapshot.forEach(function(childSnapshot){
		var childData.val();
		var lat = childSnapshot.val().Latitude;
		var long = childSnapshot.val().Longitude;
		
		$("#latitude").append(lat);
		$("#id").append(long);
	});
});

	


