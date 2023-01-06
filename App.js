import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimeTrackerScreen from "./TimeTrackerScreen";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

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
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-home-outline"
                  size={24}
                  color={tabInfo.focused ? "#000000" : "#8e8e93"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Time Tracker"
          component={TimeTrackerScreen}
          initialParams={{ onStop: handleAddTimerSession }}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-timer-outline"
                  size={24}
                  color={tabInfo.focused ? "#000000" : "#8e8e93"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-pie-chart-outline"
                  size={24}
                  color={tabInfo.focused ? "#000000" : "#8e8e93"}
                />
              );
            },
          }}
        />
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
