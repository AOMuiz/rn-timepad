import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AppButton = ({ label, iconName = "md-play", onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.icon} onPress={onPress}>
        <Ionicons name={iconName} size={24} color={"#BDBDBD"} />
      </TouchableHighlight>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  icon: {
    backgroundColor: "#E9E9FF",
    color: "#BDBDBD",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
    margin: 5,
  },
  label: { textAlign: "center", fontSize: 14, color: "#070417", opacity: 0.7 },
});
