import { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TimerHistoryItem from "../components/TimerHistoryItem";
import { GlobalContext } from "../context/Provider";
import { colors } from "../utils/colors";

const HomeScreen = ({}) => {
  const { timerSessions } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task</Text>
      <View style={styles.currentTimerContainer}>
        <Text style={styles.currentTime}>00:32:10</Text>
        <Text style={styles.currentTitle}>Rasion Project</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>History</Text>
        <FlatList
          data={timerSessions}
          renderItem={({ item }) => (
            <TimerHistoryItem
              name={item?.name}
              elapsedTime={item?.elapsedTime}
            />
          )}
          keyExtractor={(item) => item?.name}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    padding: 10,
  },
  currentTimerContainer: {
    backgroundColor: colors.black,
    borderRadius: 10,
    margin: 7,
    paddingVertical: 15,
    padding: 10,
  },
  currentTime: {
    fontSize: 32,
    fontWeight: "700",
    color: "white",
    marginVertical: 10,
  },
  currentTitle: { fontSize: 18, color: colors.white },
});
