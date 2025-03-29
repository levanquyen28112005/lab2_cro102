import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = ({ name, avatar }) => {
  return (
    <View style={styles.header}>
      <Image 
        source={{ uri: avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png" }} 
        style={styles.avatar} 
      />
      <View>
        <Text style={styles.greeting}>Chào ngày mới</Text>
        <Text style={styles.name}>{name || "Chưa có tên"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: "gray",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
