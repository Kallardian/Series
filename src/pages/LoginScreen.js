import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
