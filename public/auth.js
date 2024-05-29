// public/auth.js
document.addEventListener('DOMContentLoaded', function () {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    // Initialize Firebase Authentication
    const auth = firebase.auth();
  
    // Sign up function
    document.getElementById('signup-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log('User signed up:', userCredential.user);
        })
        .catch((error) => {
          console.error('Error signing up:', error);
        });
    });
  
    // Sign in function
    document.getElementById('signin-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signin-email').value;
      const password = document.getElementById('signin-password').value;
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log('User signed in:', userCredential.user);
        })
        .catch((error) => {
          console.error('Error signing in:', error);
        });
    });
  });