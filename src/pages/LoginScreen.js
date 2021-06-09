import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import FormRow from "../components/FormRow";
export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FormRow>
          <TextInput />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
