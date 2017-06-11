import React, { Component } from 'react';
import { View, Text } from  'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-4f295.cloudfunctions.net';
class SignInForm extends Component {
    state = { phone: '', code: ''}

    handleSubmit = async () => {
        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
                phone: this.state.phone,
                code: this.state.code
            });
            
            firebase.auth().signInWithCustomToken(data.token);

        } catch (error) {
             console.log('hataaaaa!!!!!!');
            console.log(error);
        }
    }

    render() {
        return(
            <View>
                <View style={{ marginBottom: 10}}>
                    <FormLabel>Enter your phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => {this.setState({phone})}}
                    />
                </View>
                <View style={{ marginBottom: 10}}>
                    <FormLabel>Enter code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => {this.setState({code})}}
                    />
                </View>
            <Button title="Submit" onPress={this.handleSubmit}/>
            </View>
        );
    }
}

export default SignInForm;