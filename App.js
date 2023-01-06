import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimeTrackerScreen from "./TimeTrackerScreen";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import { StyleSheet } from "react-native";
import { useState } from "react";

const Tab = createBottomTabNavigator();

const App = () => {
  const [timerSessions, setTimerSessions] = useState([]);

  const handleAddTimerSession = (name, elapsedTime) => {
    setTimerSessions((prevTimerSessions) => [
      ...prevTimerSessions,
      { name, elapsedTime },
    ]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ timerSessions }}
        />
        <Tab.Screen
          name="Time Tracker"
          component={TimeTrackerScreen}
          initialParams={{ onStop: handleAddTimerSession }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
