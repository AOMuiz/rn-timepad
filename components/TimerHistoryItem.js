import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { millisecondsToHuman } from "../utils/TimerUtils";

const TimerHistoryItem = ({ name, elapsedTime }) => (
  <View style={styles.container}>
    <View style={styles.icon}>
      <Ionicons name="md-book-outline" size={24} color={"#fff"} />
    </View>
    <View style={styles.details}>
      <View style={styles.time}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.elapsedTime}>
          {millisecondsToHuman(elapsedTime)}
        </Text>
      </View>
      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>Work</Text>
        <Text style={styles.tag}>Rasion Project</Text>
      </View>
    </View>
  </View>
);

export default TimerHistoryItem;

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    borderRadius: 10,
    padding: 14,
    margin: 7,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#FFA656",
    height: 50,
    width: 50,
    marginEnd: 12,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  //   details: { flex: 1 },
  time: {
    flexDirection: "row",
    margin: 5,
    width: "67%",
    justifyContent: "space-between",
  },
  name: { fontWeight: "600" },
  elapsedTime: { color: "#4F4F4F", textAlign: "right" },
  tagsContainer: { flexDirection: "row", margin: 5 },
  tag: {
    marginHorizontal: 4,
    padding: 5,
    backgroundColor: "#F5EEFC",
    color: "#9B51E0",
    borderRadius: 5,
  },
});
