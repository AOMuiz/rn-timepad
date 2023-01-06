import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/colors";

const Card = ({ iconName, title, iconBgColor, subTitle }) => {
  return (
    <View
      style={{
        padding: 15,
        height: 130,
        borderRadius: 16,
        padding: 20,
        backgroundColor: colors.lightGray,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 7,
        }}
      >
        <Ionicons
          name={iconName}
          size={24}
          color={colors.white}
          style={{
            backgroundColor: iconBgColor,
            marginEnd: 10,
            borderRadius: 7,
            padding: 5,
          }}
        />
        <Text numberOfLines={2} style={{ fontSize: 17, fontWeight: "400" }}>
          {title}
        </Text>
      </View>
      <Text style={{ fontSize: 32, fontWeight: "500" }}>{subTitle}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
