/*import { StatusBar } from 'expo-status-bar';*/
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform,
  Dimensions
 } from 'react-native';
 import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  const { landscape } = useDeviceOrientation();
  console.log(useDimensions)
  return (
   /* <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor: 'blue',
      width: "100%",
      height: landscape ? "100%" : "30%",
    }}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>*/
    <View
    style={{
      backgroundColor: "#fff",
      flex: 1,
      justifyContent: "center"
    }}>
      <View style={{
      backgroundColor: "black",
      flex: 1,
      flexDirection: "row"
      }}
      >
        <View style={{
      backgroundColor: "purple",
      flex: .5,
      bottom: 20
      }}/>
      
      </View>
      <Text style={{ color: 'black'}}>This is a horizontal flexspace. Purple bottom is 20.</Text>
       <View style={{
      backgroundColor: "blue",
      flex: 1,
      }}
      />
      
      <View style={{
      backgroundColor: "gold",
      flex: 1,
      }}
      />

<View style={{
      backgroundColor: "tomato",
      flex: 1,
      }}
      />
<Text style={{ color: 'black',
alignItems: 'center'}}>                                   This is a verical flexspace</Text>
<View style={{
      backgroundColor: "white",
      flex: .1,
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
