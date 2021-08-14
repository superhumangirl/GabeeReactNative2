import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const image = { uri: "https://unsplash.com/photos/3b2tADGAWnU"}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={{width: '100%', height: '100%'}}>
         <View>
            <Text>Order To Go</Text>
          </View> 
          </ImageBackground>  
     

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
 
  container: {
    flex: 1,
   
    alignItems: "center",
    justifyContent: "center"

  }
 }
);
 