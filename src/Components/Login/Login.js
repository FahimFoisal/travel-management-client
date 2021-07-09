import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';
import '../Home/Services/AddService/AddService.css'
import { useHistory, useLocation } from 'react-router';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    const [state, setState] = useState({
        isSignIn : false,
        displayName: '',
        email: '',
        password: ''
      })
      const provider = new firebase.auth.GoogleAuthProvider();
      const signIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
          const {displayName, email, photoURL} = res.user;
          const isSignedIn = {
            isSignIn : true,
            displayName : displayName,
            email: email,
            photo : photoURL
          }
          setLoggedInUser(isSignedIn);
          setUserToken();
          history.replace(from);
          setState(isSignedIn);
          // console.log(displayName, email, photoURL)
        })
      }
      const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          // Send token to your backend via HTTPS
          // ...
          sessionStorage.setItem('token',idToken);
        }).catch(function(error) {
          // Handle error
        });
      }
      const signOut = () => {
        firebase.auth().signOut()
        .then(res => {
          const isSignOut = {
            isSignIn : false,
            displayName: '',
            email: '',
            error: '',
            success: false
          }
          setState(isSignOut);
        })
      }
    return (
        <div className="w-50 mx-auto py-5" style={{backgroundColor: 'rgb(247,247,249)', marginTop: '250px'}}>
            <div className="w-75 mx-auto">
              <p className="formLabel text-center">Please Login to continue</p>
            {
                <div class="text-center"><button class="btn btn-primary linkBtn" onClick={signIn}><i class="fab fa-google"></i> Continue with Google</button></div>
            }
            </div>
        </div>
    );
};

export default Login;