import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import FormRow from "../components/FormRow";
export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FormRow>
          <TextInput style={styles.input} placeholder="exemplo@mail.com" />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="******"
            secureTextEntry
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
