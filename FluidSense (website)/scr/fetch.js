const firebaseConfig = {
    apiKey: "AIzaSyBRjAp1jqn7HLyRdfjlKBbjaQJmVoP1wkU",
    authDomain: "fluidsense-8c7f3.firebaseapp.com",
    databaseURL: "https://fluidsense-8c7f3-default-rtdb.firebaseio.com",
    projectId: "fluidsense-8c7f3",
    storageBucket: "fluidsense-8c7f3.appspot.com",
    messagingSenderId: "425639321998",
    appId: "1:425639321998:web:cadc8d00108fa4193c04df",
    measurementId: "G-6D8MZ5RFPP",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  document.getElementById("checkStatus").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    var patient = document.getElementById("patientID").value;
    var ref = firebase.database().ref("messages");
    ref.once(
      "value",
      function (snapshot) {
        var data = snapshot.val();
        for (let i in data) {
          if (data[i].patientId == patient) {
            const tableData = `
          <tr>
            <td>Patient ID</td>
             <td>Name</td>
             <td>Age</td>
             <td>Gender</td>
             <td>Doctor</td>
             <td>Bed Number</td>
             <td>Room Number</td>
             <td>Status</td>
          </tr>
          <tr>
          <tr style="background-color:#fff;">
          <td>${data[i].patientId}</td>
          <td>${data[i].patientName}</td>
          <td>${data[i].patientAge}</td>
          <td>${data[i].patientGender}</td>
          <td>${data[i].consultingDoctor}</td>
          <td>${data[i].bedNumber}</td>
          <td>${data[i].roomNumber}</td>
          <td>🟢</td>
        </tr>
          </tr>
              `;
          document.getElementById('outputData').innerHTML = tableData;
          }
        }
      },
      function (error) {
        console.log("Error: " + error.code);
      }
    );
  }