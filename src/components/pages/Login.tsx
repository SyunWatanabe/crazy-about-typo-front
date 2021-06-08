import React, { VFC, useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { auth } from "../../firebase";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const Login: VFC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div>
      {!isSignedIn ? (
        <div>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      ) : (
        <div>
          <h1>My App</h1>
          <p>Welcome {auth.currentUser?.displayName}! You are now signed-in!</p>
          {/* <a onClick={() => auth.signOut()}>Sign-out</a> */}
        </div>
      )}
    </div>
  );
};

export default Login;
