import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { paddingSize } from "../../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = React.useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1, marginRight: 20 }}
          onSubmitEditing={({ nativeEvent: { text } }) => setSubject(text)}
        />
        <RoundedButton
          onPress={() => {
            addSubject(subject);
          }}
          size={50}
          title="+"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: Platform.OS === "android" ? paddingSize.sm : paddingSize.md,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  inputContainer: {
    margin: paddingSize.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
