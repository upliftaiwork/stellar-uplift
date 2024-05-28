// auth.js

document.addEventListener('DOMContentLoaded', function() {
    const auth = firebase.auth();
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    // Login
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm['email'].value;
      const password = loginForm['password'].value;
  
      auth.signInWithEmailAndPassword(email, password).then((cred) => {
        console.log('User logged in:', cred.user);
      }).catch((error) => {
        console.error('Error logging in:', error);
      });
    });
  
    // Signup
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = signupForm['email'].value;
      const password = signupForm['password'].value;
  
      auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        console.log('User signed up:', cred.user);
      }).catch((error) => {
        console.error('Error signing up:', error);
      });
    });
  
    // Logout
    const logout = document.getElementById('logout');
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      auth.signOut().then(() => {
        console.log('User logged out');
      }).catch((error) => {
        console.error('Error logging out:', error);
      });
    });
  
    // Auth state change
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User logged in:', user);
        // Show user dashboard or other authenticated content
      } else {
        console.log('User logged out');
        // Show login/signup forms or other unauthenticated content
      }
    });
  });