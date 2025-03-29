import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Main = () => {
  const [userInfo, setUserInfo] = useState({ name: "Chưa có tên", avatar: "" });
  const [footerColor, setFooterColor] = useState("#f5f5f5");
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleUpdateInfo = (name, avatar) => {
    setUserInfo({ name, avatar });
  };

  const handleChangeFooterColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setFooterColor(randomColor);
  };

  const handleChangeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}> 
      <Header name={userInfo.name} avatar={userInfo.avatar} />
      <Body 
        onUpdateInfo={handleUpdateInfo} 
        onChangeFooterColor={handleChangeFooterColor} 
        onChangeBackgroundColor={handleChangeBackgroundColor}
      />
      <Footer footerColor={footerColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
