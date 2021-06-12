import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "firebase";

import FormRow from "../components/FormRow";
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: "",
      password: "",
    };
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyD3w5IBoRok6pz3kuvTlP7tVdirLBwrWGI",
      authDomain: "series-35748.firebaseapp.com",
      projectId: "series-35748",
      storageBucket: "series-35748.appspot.com",
      messagingSenderId: "1069876638389",
      appId: "1:1069876638389:web:51a79489c4df015b2c04fc",
      measurementId: "G-6C4XCVPHFW",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  onChangeInput(field, value) {
    this.setState({
      [field]: value, //Computed Field (ele busca no estado o field com o nome que veio no parametro)
    });
  }

  tryLogin() {
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder="exemplo@mail.com"
            value={this.state.mail}
            onChangeText={(value) => this.onChangeInput("mail", value)}
          />
        </FormRow>
        <FormRow second>
          <TextInput
            style={styles.input}
            placeholder="******"
            secureTextEntry
            value={this.state.password}
            onChangeText={(value) => this.onChangeInput("password", value)}
          />
        </FormRow>
        <Button title="Entrar" onPress={() => this.tryLogin()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
