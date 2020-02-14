// Initialize Firebase (ADD YOUR OWN DATA)
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxUnHDejwGm1Vi2dq_npifqZn_pxRWk_o",
    authDomain: "younglings2020.firebaseapp.com",
    databaseURL: "https://younglings2020.firebaseio.com",
    projectId: "younglings2020",
    storageBucket: "younglings2020.appspot.com",
    messagingSenderId: "412614649278",
    appId: "1:412614649278:web:9f9b7289605ff87e8785ef",
    measurementId: "G-4QYTBF9G3S"
  }
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }