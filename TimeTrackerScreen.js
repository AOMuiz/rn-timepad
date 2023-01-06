import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import AppButton from "./components/Button";

const TimeTrackerScreen = ({ route, navigation }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [sessionName, setSessionName] = useState("");
  const { onStop } = route.params;

  useEffect(() => {
    let interval;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleQuit = () => {
    navigation.navigate("Home");
  };

  const handlePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setElapsedTime(0);
    onStop(sessionName, elapsedTime);
    setSessionName("");
    navigation.navigate("Home");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {isRunning ? (
        <>
          <Text>Elapsed Time: {elapsedTime}</Text>
          <View style={styles.actionsContainer}>
            {isPaused ? (
              <AppButton
                onPress={handlePause}
                label="Resume"
                iconName="md-play"
              />
            ) : (
              <AppButton
                label="Pause"
                onPress={handlePause}
                iconName="md-pause"
              />
            )}
            <AppButton label="Stop" onPress={handleStop} iconName="md-stop" />
          </View>
        </>
      ) : (
        <View>
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
          <View style={styles.initialActions}>
            <TouchableOpacity
              disabled={!sessionName}
              onPress={handleStart}
              style={styles.start}
            >
              <Text
                iconName="md-play"
                style={{ fontSize: 18, fontWeight: "500" }}
              >
                Start
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleQuit} style={styles.quit}>
              <Text
                iconName="md-play"
                style={{ fontSize: 18, fontWeight: "400" }}
              >
                Quit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default TimeTrackerScreen;

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  initialActions: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  start: {
    width: "80%",
    backgroundColor: "#E9E9FF",
    fontSize: 25,

    color: "#070417",
    padding: 15,
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
  },
  quit: { color: "#070417", marginVertical: 20, fontSize: 18 },
});
