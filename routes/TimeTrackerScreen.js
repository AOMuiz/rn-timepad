import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import AppButton from "../components/Button";
import { millisecondsToHuman } from "../utils/TimerUtils";
import { colors } from "../utils/colors";
import useTimer from "../hooks/useTimer";
import { GlobalContext } from "../context/Provider";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const TimeTrackerScreen = ({ navigation }) => {
  const { onStop, sessionName, setSessionName } = useContext(GlobalContext);

  const {
    setIsPaused,
    setIsRunning,
    isRunning,
    isPaused,
    elapsedTime,
    handlePause,
    handleStart,
    setElapsedTime,
  } = useTimer();

  const handleQuit = () => {
    navigation.navigate("Home");
  };

  const handleStop = () => {
    const id = uuidv4();
    setIsRunning(false);
    setIsPaused(false);
    setElapsedTime(0);
    onStop(sessionName, elapsedTime, id);
    setSessionName("");
    navigation.navigate("Home");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {isRunning ? (
        <>
          <View style={styles.counterCountainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.sessionName}>{sessionName}</Text>
              <View style={styles.tagsContainer}>
                <Text style={styles.tag}>Work</Text>
                <Text style={styles.tag}>Rasion Project</Text>
              </View>
            </View>
            <Text style={styles.elapsedTime}>
              {millisecondsToHuman(elapsedTime)}
            </Text>
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
  counterCountainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginVertical: 15,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginHorizontal: 15,
  },
  tagsContainer: { flexDirection: "row", margin: 5 },
  tag: {
    marginHorizontal: 4,
    padding: 5,
    backgroundColor: "#F5EEFC",
    color: colors.purple,
    borderRadius: 5,
  },
  sessionName: {
    color: "#070417",
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: "500",
  },
  elapsedTime: { fontSize: 48, fontWeight: "500", textAlign: "center" },
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

    color: colors.black,
    padding: 15,
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
  },
  quit: { color: colors.black, marginVertical: 20, fontSize: 18 },
});
