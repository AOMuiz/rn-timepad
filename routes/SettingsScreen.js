import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React, { useContext } from "react";
import { BarChart, LineChart } from "react-native-chart-kit";
import { GlobalContext } from "../context/Provider";
import { colors } from "../utils/colors";
import Card from "../components/Card";

const SettingsScreen = ({}) => {
  const { timerSessions } = useContext(GlobalContext);
  const screenWidth = Dimensions.get("window").width;

  const time = timerSessions?.map((timerSession) => timerSession.elapsedTime);
  const labels = timerSessions?.map((timerSession) => timerSession.name);

  const data = {
    labels,
    datasets: [
      {
        data: time,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Statistics"], // optional
  };

  const chartConfig = {
    backgroundColor: "#FAFAFF",
    backgroundGradientFrom: "#4E2979",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fafa",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    labelColor: (opacity = 1) => `${colors.lightGray}`,
    style: {
      borderRadius: 16,
      marginHorizontal: 5,
    },
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <ScrollView style={{ marginVertical: 10, flex: 1 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Card
            iconName="md-checkmark"
            title={`Task${"\n"}Completed`}
            subTitle={timerSessions?.length}
            iconBgColor={colors.green}
          />
          <Card
            iconName="md-stopwatch"
            title={`Time\nDuration`}
            subTitle="1h 46m"
            iconBgColor={colors.blue}
          />
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
      <View>
        <Text>Total elapsed time for each session:</Text>
        <BarChart
          data={{
            labels,
            datasets: [
              {
                data: time,
              },
            ],
          }}
          width={screenWidth}
          height={220}
          yAxisLabel="Elapsed Time (s)"
          chartConfig={{
            backgroundColor: "#FAFAFF",
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
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
