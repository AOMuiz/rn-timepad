import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { BarChart, Grid } from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ route }) => {
  const { timerSessions } = route.params;

  const loadTimerHistory = async () => {
    const timerHistoryString = await AsyncStorage.getItem("timerHistory");
    if (timerHistoryString) {
      console.log({ timerHistoryString });
    }
  };

  useEffect(() => {
    loadTimerHistory();
  }, [timerSessions]);

  const data = timerSessions.map((timerSession) => timerSession.elapsedTime);
  const labels = timerSessions.map((timerSession) => timerSession.name);

  console.log({ data, labels, timerSessions });

  return (
    <View>
      <View>
        <Text>Total elapsed time for each session:</Text>
        <BarChart
          data={{
            // labels,
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                // data: [...data],
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel="Elapsed Time (s)"
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
          }}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});