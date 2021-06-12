import React from "react";
import { View, StyleSheet } from "react-native";

const FormRow = (props) => {
  const { children, first, second } = props; //serve para acessar os filhos dentro da nossa "tag"
  return (
    <View
      style={[
        styles.container,
        first ? styles.first : null,
        second ? styles.second : null,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
    elevation: 1,
  },
  first: {
    marginTop: 10,
  },
  second: {
    marginBottom: 10,
  },
});

export default FormRow;
