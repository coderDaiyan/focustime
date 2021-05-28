import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSize, spacings } from "../../utils/sizes";

const HistoryItem = ({ item, index }) => {
  console.log(item);
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        {focusHistory.length ? (
          <>
            <Text style={styles.title}> Things we've focused on </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        ) : null}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSize.md,
  }),
  title: {
    color: "white",
    fontSize: fontSize.lg,
  },
  clearContainer: {
    alignItems: "center",
    padding: spacings.md,
  },
});
