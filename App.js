import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./routes/HomeScreen";
import TimeTrackerScreen from "./routes/TimeTrackerScreen";
import SettingsScreen from "./routes/SettingsScreen";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalProvider from "./context/Provider";

const Tab = createBottomTabNavigator();

const App = () => {
  // useEffect(() => {
  //   loadTimerHistory();
  // }, []);

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
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
    </GlobalProvider>
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
