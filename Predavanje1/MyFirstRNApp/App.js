import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Probna aplikacija</Text>
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Lijevo</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Desno</Text>
        </View>
      </View>

      {/* Image component */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-41-512.png",
        }}
      />
      <Image style={styles.tinyLogo} source={require("./assets/favicon.png")} />

      {/* button component */}
      <Button title="Button" onPress={() => Alert.alert("Stisnuli ste button")} />

      {/* touchable opacity component */}
      <TouchableOpacity
        style={styles.resolvedContainerStyle}
        onPress={() => Alert.alert("TouchableOpacity dodirnut")}
      >
        <Text style={styles.textStyle}>Touchable opacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#efefef",
  },
  header: {
    borderBottomWidth: 2,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
    backgroundColor: "white"
  },
  tinyLogo: {
    margin: 10,
    width: 100,
    height: 100,
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "#b0a8c5",
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    color: "black",
  },
});
