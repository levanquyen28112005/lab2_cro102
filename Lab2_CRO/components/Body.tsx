import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const Body = ({ onUpdateInfo, onChangeFooterColor, onChangeBackgroundColor }) => { 
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dán địa chỉ avatar mới"
        value={avatar}
        onChangeText={setAvatar}
      />
      <Button title="CẬP NHẬT THÔNG TIN" onPress={() => onUpdateInfo(name, avatar)} color="blue" />
      <Button title="ĐỔI MÀU FOOTER" onPress={onChangeFooterColor} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Body;
