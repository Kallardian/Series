import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import FormRow from "../components/FormRow";
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: "",
      password: "",
    };
  }
  onChangeMail(value) {
    this.setState({
      mail: value,
    });
  }
  onChangePassword(value) {
    this.setState({
      password: value,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="exemplo@mail.com"
            value={this.state.mail}
            onChangeText={(value) => this.onChangeMail(value)}
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="******"
            secureTextEntry
            value={this.state.password}
            onChangeText={(value) => this.onChangePassword(value)}
          />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
