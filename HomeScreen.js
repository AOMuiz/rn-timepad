import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const TimerHistoryItem = ({ name, elapsedTime }) => (
  <View>
    <Text>{name}</Text>
    <Text>{elapsedTime}</Text>
  </View>
);

const HomeScreen = ({ route }) => {
  const { timerSessions } = route.params;
  console.log(timerSessions);
  return (
    <View>
      <Text>Timer History</Text>
      <FlatList
        data={timerSessions}
        renderItem={({ item }) => (
          <TimerHistoryItem name={item?.name} elapsedTime={item?.elapsedTime} />
        )}
        keyExtractor={(item) => item?.name}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
