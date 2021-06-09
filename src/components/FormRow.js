import React from "react";
import { View, StyleSheet } from "react-native";

const FormRow = (props) => {
  const { children } = props; //serve para acessar os filhos dentro da nossa "tag"
  return <View>{children}</View>;
};

export default FormRow;
