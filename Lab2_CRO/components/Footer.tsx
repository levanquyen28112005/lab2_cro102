import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = ({ footerColor }) => {
  return (
    <View style={[styles.footer, { backgroundColor: footerColor }]}>
      <Text style={styles.text}>
        Thời gian bạn cập nhật thông tin: 16/5/2023 18:26:56
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute", 
    bottom: 0,
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});

export default Footer;
