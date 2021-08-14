import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://cdn.shopify.com/s/files/1/0276/7765/5137/products/2_1024x1024@2x.jpg?v=1585689064"}} style={{width: 250, height: 250}} />
      <Text style={styles.title}>Gabee Coffee</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />

      <TouchableOpacity
        onPress={() => alert('Start your order now!')}
        style={{ backgroundColor: 'red'}}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Mobile Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
