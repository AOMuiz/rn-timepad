import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { BarChart, Grid } from "react-native-chart-kit";

const SettingsScreen = ({ route }) => {
  // const route = useRoute();
  const { timerSessions } = route.params;

  const data = timerSessions.map((timerSession) => timerSession.elapsedTime);
  const labels = timerSessions.map((timerSession) => timerSession.name);

  return (
    <View>
      <View>
        <Text>Total elapsed time for each session:</Text>
        <BarChart
          data={{
            labels,
            datasets: [
              {
                data,
              },
            ],
          }}
          width={340}
          height={220}
          yAxisLabel="Elapsed Time (s)"
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
