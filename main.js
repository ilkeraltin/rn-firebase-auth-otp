import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';


class App extends React.Component {
  componentDidMount () {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyDI4V85mJG4OQiaUsyFIN27RuQc9UzCOzo",
            authDomain: "one-time-password-4f295.firebaseapp.com",
            databaseURL: "https://one-time-password-4f295.firebaseio.com",
            projectId: "one-time-password-4f295",
            storageBucket: "one-time-password-4f295.appspot.com",
            messagingSenderId: "818495032806"
        };
        firebase.initializeApp(config);
    }
    
  render() {
    return (
      <View style={styles.container}>
       <SignUpForm />
       <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
