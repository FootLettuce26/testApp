const signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log("User signed up:", user);
      })
      .catch((error) => {
        console.error("Sign-up error:", error.message);
      });
  };
  

  const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        console.error("Sign-in error:", error.message);
      });
  };

  const signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        // User signed out successfully
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Sign-out error:", error.message);
      });
  };
  
  