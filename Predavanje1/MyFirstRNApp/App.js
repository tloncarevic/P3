import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
      <Text>Dobro jutro radni narode</Text>
=======
      {/* view, text element */}

      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Test Appheader</Text>

      </View>

      <View style={styles.jumbotron}>
        <View styles={StyleSheet.left}></View>
        <Text styles={styles.leftText}>LEFT</Text>
        <View style={StyleSheet.right}></View>
        <Text>RIGHT</Text>
      </View>
      
>>>>>>> Stashed changes
      <StatusBar style="auto" />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://thumbs.dreamstime.com/b/cartoon-cute-cat-sleeping-white-background-icon-logo-vector-kitten-sleep-illustrator-110972697.jpg",
        }}
      />
      <Image style={styles.tinyLogo}
        source={require("./assets/mica.jpg")}
      />

        <Button 
        title="Naslov buttona"
        onPress={() => Alert.alert("Button pressed")}
        />
      
      <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => Alert.alert("Touchable opacity pressed")}>
          <Text style={styles.textStyle}>Touchable Opacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',

  },

  headerWrapper: {
    padding: 10,
    borderBottomWidth: 2

  },

  headerTitle: {
    textAlign: "center",
    fontSize: 30
  },
  jumbotron: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#b0a8c5"
  },
  leftText: {
    color: "white",
    fontSize: 40
  },

  tinyLogo: {
    width: 100,
    height: 100
  },
  touchableContainer: {
    margin: 20,
    backgroundColor: white,
    padding: 20
  },
  textStyle: {
    fontSize: 20
  }

});