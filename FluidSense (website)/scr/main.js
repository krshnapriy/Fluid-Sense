// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyBRjAp1jqn7HLyRdfjlKBbjaQJmVoP1wkU",
    authDomain: "fluidsense-8c7f3.firebaseapp.com",
    databaseURL: "https://fluidsense-8c7f3-default-rtdb.firebaseio.com",
    projectId: "fluidsense-8c7f3",
    storageBucket: "fluidsense-8c7f3.appspot.com",
    messagingSenderId: "425639321998",
    appId: "1:425639321998:web:cadc8d00108fa4193c04df",
    measurementId: "G-6D8MZ5RFPP"
      
  
    };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  console.log(messagesRef)
  
  // Listen for form submit
  document.getElementById('createEntry').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var patientname = getInputVal('patientname');
    var a = Math.floor(Math.random()*90000) + 10000;
    var b = 'ID';
    var patientId = b.concat(a);
    console.log(patientId);
    var age = getInputVal('age');
    var gender = getInputVal('gender');
    var address = getInputVal('address');
    var bloodgroup = getInputVal('Blood');
    var mobilenumber = getInputVal('mobilenumber');
    var emergencymobilenumber = getInputVal('emergencymobilenumber');
    var medicalhistory = getInputVal('medicalhistory');
    var symptoms = getInputVal('symptoms');
    var doctorname = getInputVal('doctorname');
    var roomnumber = getInputVal('roomnumber');
    var bednumber = getInputVal('bednumber');
  
    // Save message
    saveMessage(patientname, age, gender, address, bloodgroup, mobilenumber, emergencymobilenumber, medicalhistory, symptoms, doctorname, roomnumber, bednumber, patientId);
  
    // Show alert
    document.getElementById('alert').innerHTML = `New Entry Created, Patient ID ${patientId}`;
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },30000);
  
    // Clear form
    document.getElementById('createEntry').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(patientname, age, gender, address, bloodgroup, mobilenumber, emergencymobilenumber, medicalhistory, symptoms, doctorname, roomnumber, bednumber, patientId){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      patientName: patientname,
      patientAge : age,
      patientGender : gender,
      patientAddress : address,
      patientBloodGroup : bloodgroup,
      patientMobile: mobilenumber,
      patientEmergencyNumber: emergencymobilenumber,
      patientMedHistory: medicalhistory,
      patientSymptoms : symptoms,
      consultingDoctor: doctorname,
      roomNumber : roomnumber,
      bedNumber: bednumber,
      patientId: patientId
    });
  }