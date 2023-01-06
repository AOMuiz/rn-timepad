import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimeTrackerScreen from "../routes/TimeTrackerScreen";
import HomeScreen from "../routes/HomeScreen";
import SettingsScreen from "../routes/SettingsScreen";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

const App = () => {
  const [timerSessions, setTimerSessions] = useState([]);

  const handleAddTimerSession = (name, elapsedTime) => {
    setTimerSessions((prevTimerSessions) => [
      ...prevTimerSessions,
      { name, elapsedTime },
    ]);
    AsyncStorage.setItem(
      "timerHistory",
      JSON.stringify([...timerSessions, { name, elapsedTime }])
    );
  };

  const loadTimerHistory = async () => {
    const timerHistoryString = await AsyncStorage.getItem("timerHistory");
    if (timerHistoryString) {
      setTimerSessions(JSON.parse(timerHistoryString));
      console.log({ timerHistoryString });
    }
  };

  useEffect(() => {
    loadTimerHistory();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ timerSessions, setTimerSessions }}
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
          initialParams={{ timerSessions }}
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
