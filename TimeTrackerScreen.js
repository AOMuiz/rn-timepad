import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState, useEffect } from "react";

const TimeTrackerScreen = ({ route, navigation }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [sessionName, setSessionName] = useState("");
  const { onStop } = route.params;

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setElapsedTime(0);
    onStop(sessionName, elapsedTime);
    navigation.navigate("Home");
  };

  return (
    <View>
      {isRunning ? (
        <>
          <Text>Elapsed Time: {elapsedTime}</Text>
          <Button onPress={handlePause} title="Pause" />
        </>
      ) : (
        <>
          <TextInput
            value={sessionName}
            onChangeText={setSessionName}
            placeholder="Enter session name"
            style={{
              height: 60,
              padding: 10,
              margin: 10,
              backgroundColor: "white",
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
          <Button
            onPress={handleStart}
            title="Start"
            style={{
              margin: 10,
            }}
          />
        </>
      )}
      <Button onPress={handleStop} title="Stop" />
    </View>
  );
};

export default TimeTrackerScreen;

const styles = StyleSheet.create({});
